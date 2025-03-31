import { Modal, ModalProps } from "./Modal";
import { ResponsiveModal } from "./ResponsiveModal";
import { CustomAlert } from "./CustomAlert";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  memo,
} from "react";

export type OpenModalProps = {
  title?: string;
  component:
    | ((props: { close: () => void }) => React.ReactNode)
    | React.ComponentType<any>;
  props?: Record<string, any>;
  size?: ModalProps["size"];
  classNames?: ModalProps["classNames"];
};

type ModalConfig = OpenModalProps & {
  id: string;
};

type AlertConfig = {
  id: string;
  message?: string;
  onOkay?: () => void;
  onCancel?: () => void;
  title?: string;
  actionText?: string;
  cancelText?: string;
  isOpen: boolean;
};

type ModalContextType = {
  openModal: (config: OpenModalProps) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
  showConfirm: (config: {
    message?: string;
    onOkay?: () => void;
    onCancel?: () => void;
    title?: string;
    actionText?: string;
    cancelText?: string;
  }) => string;
  showConfirmDelete: (config: {
    message?: string;
    onDelete?: () => void;
    onCancel?: () => void;
  }) => string;
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
      {modals.map(
        ({ id, title, component: Component, props, size, classNames }) => (
          <div key={id} className="pointer-events-auto">
            <ResponsiveModal
              title={title}
              showCancel={true}
              onCancel={() => onClose(id)}
              open={true}
              onOpenChange={(open) => {
                if (!open) onClose(id);
              }}
              size={size}
              classNames={classNames}
            >
              {typeof Component === "function" ? (
                <Component {...props} close={() => onClose(id)} />
              ) : (
                // @ts-ignore
                <Component {...props} />
              )}
            </ResponsiveModal>
          </div>
        )
      )}
    </>
  );
});

const AlertList = memo(function AlertList({
  alerts,
  onClose,
}: {
  alerts: AlertConfig[];
  onClose: (id: string) => void;
}) {
  return (
    <>
      {alerts.map(
        ({
          id,
          message,
          onOkay,
          onCancel,
          title,
          actionText,
          cancelText,
          isOpen,
        }) => (
          <CustomAlert
            key={id}
            open={isOpen}
            onOpenChange={(open) => {
              if (!open) {
                onCancel?.();
                onClose(id);
              }
            }}
            title={title}
            description={message}
            actionText={actionText}
            cancelText={cancelText}
            onAction={() => {
              onOkay?.();
              onClose(id);
            }}
            onCancel={() => {
              onCancel?.();
              onClose(id);
            }}
          />
        )
      )}
    </>
  );
});

export const ModalManager = memo(function ModalManager({
  classNames,
  children,
}: ModalManagerProps) {
  const [modals, setModals] = useState<ModalConfig[]>([]);
  const [alerts, setAlerts] = useState<AlertConfig[]>([]);

  const openModal = useCallback((config: OpenModalProps) => {
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
    setAlerts([]);
  }, []);

  const closeAlert = useCallback((id: string) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, isOpen: false } : alert
      )
    );
    // Remove alert after animation
    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 200);
  }, []);

  const showConfirm = useCallback(
    (config: {
      message?: string;
      onOkay?: () => void;
      onCancel?: () => void;
      title?: string;
      actionText?: string;
      cancelText?: string;
    }) => {
      const id = Math.random().toString(36).substring(7);
      setAlerts((prev) => [
        ...prev,
        {
          id,
          message: config.message || "Are you sure?",
          onOkay: config.onOkay,
          onCancel: config.onCancel,
          title: config.title,
          actionText: config.actionText,
          cancelText: config.cancelText,
          isOpen: true,
        },
      ]);
      return id;
    },
    []
  );

  const showConfirmDelete = useCallback(
    (config: {
      message?: string;
      onDelete?: () => void;
      onCancel?: () => void;
    }) => {
      return showConfirm({
        title: "Confirm Delete",
        message: config.message || "Are you sure you want to delete this item?",
        onOkay: config.onDelete,
        onCancel: config.onCancel,
        actionText: "Delete",
        cancelText: "Cancel",
      });
    },
    [showConfirm]
  );

  const contextValue = useMemo(
    () => ({
      openModal,
      closeModal,
      closeAllModals,
      showConfirm,
      showConfirmDelete,
    }),
    [openModal, closeModal, closeAllModals, showConfirm, showConfirmDelete]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <ModalList modals={modals} onClose={closeModal} />
      <AlertList alerts={alerts} onClose={closeAlert} />
    </ModalContext.Provider>
  );
});
