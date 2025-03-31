import React from "react";
import { ReactFC } from "../../types";
import { cn } from "@/cn";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { useControlledOpen } from "../../hooks/useControlledOpen";

export type ModalSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "full";

export type ModalClassNames = {
  root?: string;
  content?: string;
  header?: string;
  title?: string;
  body?: string;
  footer?: string;
  submitButton?: string;
  cancelButton?: string;
};

export interface ModalProps {
  trigger?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: ModalSize;
  classNames?: ModalClassNames;
}

const sizeToMaxWidth: Record<ModalSize, string> = {
  sm: "sm:max-w-[425px]",
  md: "sm:max-w-[550px]",
  lg: "sm:max-w-[680px]",
  xl: "sm:max-w-[800px]",
  "2xl": "sm:max-w-[1024px]",
  "3xl": "sm:max-w-[1280px]",
  "4xl": "sm:max-w-[1536px]",
  "5xl": "sm:max-w-[1920px]",
  full: "sm:max-w-[100vw]",
};

export const Modal: ReactFC<ModalProps> = ({
  trigger = "Open",
  title,
  children,
  open,
  onOpenChange,
  size = "sm",
  classNames = {},
}) => {
  const { isOpen, setIsOpen } = useControlledOpen({
    open,
    onOpenChange,
  });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger && (
        <DialogTrigger asChild>
          <button className="text-sm font-medium">{trigger}</button>
        </DialogTrigger>
      )}
      <DialogContent
        className={cn(
          sizeToMaxWidth[size],
          classNames.root,
          classNames.content
        )}
      >
        {title && (
          <DialogHeader className={classNames.header}>
            <DialogTitle className={classNames.title}>{title}</DialogTitle>
          </DialogHeader>
        )}
        <div className={cn("py-4", classNames.body)}>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
