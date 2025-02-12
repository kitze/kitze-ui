import React from "react";
import { ReactFC } from "../../types";
import { Modal } from "./Modal";
import { CustomVaul, CustomVaulProps } from "./CustomVaul";
import { useKitzeUI } from "../../context/KitzeUIContext";
import { useControlledOpen } from "../../hooks/useControlledOpen";

export interface ResponsiveModalProps {
  trigger?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  showCancel?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  customVaulProps?: CustomVaulProps;
}

export const ResponsiveModal: ReactFC<ResponsiveModalProps> = (props) => {
  const { isMobile } = useKitzeUI();
  const { isOpen, setIsOpen, close } = useControlledOpen({
    open: props.open,
    onOpenChange: props.onOpenChange,
  });

  const { customVaulProps = {} } = props;

  if (isMobile) {
    return (
      <CustomVaul
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={props.trigger}
        title={props.title}
        {...customVaulProps}
      >
        <div className="space-y-4">
          <div className="py-4">{props.children}</div>
        </div>
      </CustomVaul>
    );
  }

  return <Modal {...props} />;
};
