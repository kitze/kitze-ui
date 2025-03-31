import { useState, useRef } from "react";

export interface UseClickWithConfirmOptions {
  onClick?: () => void;
  inlineConfirm?: boolean;
  preventMenuClose?: boolean;
}

export const useClickWithConfirm = ({
  onClick,
  inlineConfirm,
  preventMenuClose,
}: UseClickWithConfirmOptions) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const isConfirmingRef = useRef(false);

  const handleClick = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (inlineConfirm) {
      if (isConfirmingRef.current) {
        onClick?.();
        isConfirmingRef.current = false;
        setIsConfirming(false);
      } else {
        isConfirmingRef.current = true;
        setIsConfirming(true);
      }
    } else {
      onClick?.();
    }
  };

  const resetConfirm = () => {
    if (isConfirmingRef.current) {
      console.log("useClickWithConfirm - resetting confirm state");
      isConfirmingRef.current = false;
      setIsConfirming(false);
    }
  };

  return {
    isConfirming,
    handleClick,
    resetConfirm,
  };
};
