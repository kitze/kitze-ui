import { ReactFC } from "@/types";
import { cn } from "@/cn";
import { useClickWithConfirm } from "@/hooks/useClickWithConfirm";
import { HelpTooltipIcon } from "@/components/custom-ui/HelpTooltipIcon";
import { IconType } from "react-icons";

export interface BaseMenuItemProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: IconType | React.ComponentType<{ className?: string }>;
  iconClassName?: string;
  hint?: string;
  variant?: "default" | "danger";
  inlineConfirm?: boolean;
  preventPropagation?: boolean;
  classNames?: {
    root?: string;
    icon?: string;
    content?: string;
    hint?: string;
  };
}

export interface BaseMenuItemResult {
  itemProps: {
    className: string;
    disabled?: boolean;
    onClick: (e: React.MouseEvent) => void;
    onPointerLeave: () => void;
  };
  renderContent: () => React.ReactNode;
}

export const useBaseMenuItem = (
  props: BaseMenuItemProps
): BaseMenuItemResult => {
  const {
    children,
    className,
    disabled,
    onClick,
    icon: Icon,
    iconClassName = "h-4 w-4",
    hint,
    variant = "default",
    inlineConfirm,
    preventPropagation,
    classNames = {},
  } = props;

  const { isConfirming, handleClick, resetConfirm } = useClickWithConfirm({
    onClick,
    inlineConfirm,
  });

  const handleClickWithPropagation = (e: React.MouseEvent) => {
    if (preventPropagation) {
      e.stopPropagation();
    }
    handleClick();
  };

  return {
    itemProps: {
      className: cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        {
          "cursor-not-allowed opacity-30": disabled,
          "text-red-400 hover:!text-red-400": variant === "danger",
        },
        className,
        classNames.root
      ),
      disabled,
      onClick: handleClickWithPropagation,
      onPointerLeave: resetConfirm,
    },
    renderContent: () => (
      <>
        {Icon && (
          <Icon
            className={cn(
              "stroke-muted-foreground",
              variant === "danger" && "stroke-red-400",
              iconClassName,
              classNames.icon
            )}
          />
        )}
        <div className={cn("flex-1", classNames.content)}>
          {isConfirming ? "Sure?" : children}
        </div>
        {hint && (
          <HelpTooltipIcon
            tooltip={hint}
            classNames={{ icon: classNames.hint }}
          />
        )}
      </>
    ),
  };
};
