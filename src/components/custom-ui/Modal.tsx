import React from "react";
import { ReactFC } from "../../types";
import { cn } from "@/cn";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "../ui/Dialog";

interface ModalProps {
  trigger?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  showCancel?: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
}

export const Modal: ReactFC<ModalProps> = ({
  trigger = "Open",
  title,
  children,
  showCancel = true,
  onCancel,
  onSubmit,
  submitText = "Submit",
  cancelText = "Cancel",
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm font-medium">{trigger}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        )}
        <div className="py-4">{children}</div>
        <DialogFooter className="gap-2">
          {onSubmit && (
            <button
              onClick={onSubmit}
              className={cn(
                "px-4 py-2 text-sm font-medium text-white",
                "bg-violet-600 hover:bg-violet-700",
                "rounded-md transition-colors"
              )}
            >
              {submitText}
            </button>
          )}
          {showCancel && (
            <DialogClose asChild>
              <button
                onClick={onCancel}
                className={cn(
                  "px-4 py-2 text-sm font-medium",
                  "border border-gray-200",
                  "rounded-md transition-colors",
                  "hover:bg-gray-50"
                )}
              >
                {cancelText}
              </button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
