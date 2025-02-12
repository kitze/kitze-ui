import { Modal } from "./Modal";
import { ResponsiveModal, ResponsiveModalProps } from "./ResponsiveModal";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  memo,
} from "react";

type ModalConfig = {
  id: string;
  title?: string;
  component:
    | React.ComponentType<any>
    | ((props: { close: () => void }) => React.ReactNode);
  props?: Record<string, any>;
  modalProps?: Partial<ResponsiveModalProps>;
};

type ModalContextType = {
  openModal: (config: Omit<ModalConfig, "id">) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export type ModalManagerProps = {
  classNames?: {
    root?: string;
  };
  children?: React.ReactNode;
};

const ModalList = memo(function ModalList({
  modals,
  onClose,
}: {
  modals: ModalConfig[];
  onClose: (id: string) => void;
}) {
  return (
    <>
      {modals.map(({ id, title, component: Component, props, modalProps }) => (
        <div key={id} className="pointer-events-auto">
          <ResponsiveModal
            title={title}
            showCancel={true}
            onCancel={() => onClose(id)}
            open={true}
            onOpenChange={(open) => {
              if (!open) onClose(id);
            }}
            {...modalProps}
          >
            {typeof Component === "function" ? (
              <Component {...props} close={() => onClose(id)} />
            ) : (
              // @ts-ignore
              <Component {...props} />
            )}
          </ResponsiveModal>
        </div>
      ))}
    </>
  );
});

export const ModalManager = memo(function ModalManager({
  classNames,
  children,
}: ModalManagerProps) {
  const [modals, setModals] = useState<ModalConfig[]>([]);

  const openModal = useCallback((config: Omit<ModalConfig, "id">) => {
    const id = Math.random().toString(36).substring(7);
    setModals((prev) => {
      const newModals = [...prev, { ...config, id }];
      return newModals;
    });
    return id;
  }, []);

  const closeModal = useCallback((id: string) => {
    setModals((prev) => prev.filter((modal) => modal.id !== id));
  }, []);

  const closeAllModals = useCallback(() => {
    setModals([]);
  }, []);

  const contextValue = useMemo(
    () => ({
      openModal,
      closeModal,
      closeAllModals,
    }),
    [openModal, closeModal, closeAllModals]
  );

  console.log("🟣 Rendering ModalManager, current modals:", modals);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <ModalList modals={modals} onClose={closeModal} />
    </ModalContext.Provider>
  );
});
