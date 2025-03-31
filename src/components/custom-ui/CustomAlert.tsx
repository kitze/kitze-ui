"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogCancel,
} from "../ui/Alert";

interface CustomAlertProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  cancelText?: string;
  actionText?: string;
  onCancel?: () => void;
  onAction?: () => void;
}

export const CustomAlert = ({
  open,
  onOpenChange,
  title = "Confirm Action",
  description = "Are you sure you want to continue?",
  cancelText = "Cancel",
  actionText = "Continue",
  onCancel,
  onAction,
}: CustomAlertProps) => {
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      // Ensure we remove any lingering pointer-events styles
      document.body.style.removeProperty("pointer-events");
    }
    onOpenChange?.(newOpen);
  };

  React.useEffect(() => {
    return () => {
      // Cleanup on unmount
      document.body.style.removeProperty("pointer-events");
    };
  }, []);

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
