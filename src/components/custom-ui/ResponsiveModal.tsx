import React, { useState } from "react";
import { ReactFC } from "../../types";
import { Modal } from "./Modal";
import { CustomVaul } from "./CustomVaul";
import { cn } from "@/cn";
import { useKitzeUI } from "../../context/KitzeUIContext";

interface ResponsiveModalProps {
  trigger?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  showCancel?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
}

export const ResponsiveModal: ReactFC<ResponsiveModalProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useKitzeUI();

  if (isMobile) {
    return (
      <CustomVaul
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={props.trigger}
        title={props.title}
      >
        <div className="space-y-4">
          <div className="py-4">{props.children}</div>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            {props.onSubmit && (
              <button
                onClick={() => {
                  props.onSubmit?.();
                  setIsOpen(false);
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium text-white",
                  "bg-violet-600 hover:bg-violet-700",
                  "rounded-md transition-colors w-full sm:w-auto"
                )}
              >
                {props.submitText || "Submit"}
              </button>
            )}
            {props.showCancel && (
              <button
                onClick={() => {
                  props.onCancel?.();
                  setIsOpen(false);
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium",
                  "border border-gray-200",
                  "rounded-md transition-colors",
                  "hover:bg-gray-50 w-full sm:w-auto"
                )}
              >
                {props.cancelText || "Cancel"}
              </button>
            )}
          </div>
        </div>
      </CustomVaul>
    );
  }

  return <Modal {...props} />;
};
