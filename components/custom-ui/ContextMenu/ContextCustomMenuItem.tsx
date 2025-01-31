import React from "react";
import { IconType } from "react-icons";
import { cn } from "../../../cn";
import { ReactFC } from "../../../types";
import { ContextMenuItem as ContextMenuItemUI } from "../../ui/ContextMenu";
import { HelpTooltipIcon } from "../HelpTooltipIcon";

export interface ContextMenuItemClassNames {
  root?: string;
  icon?: string;
  content?: string;
  hint?: string;
}

export interface ContextMenuItemProps {
  children?: React.ReactNode;
  onClick?: () => void;
  Icon?: IconType;
  variant?: "default" | "danger";
  classNames?: ContextMenuItemClassNames;
  hint?: string;
}

export const ContextCustomMenuItem: ReactFC<ContextMenuItemProps> = ({
  children,
  onClick,
  Icon,
  variant = "default",
  classNames = {},
  hint,
}) => {
  return (
    <ContextMenuItemUI
      onClick={onClick}
      className={cn(
        "gap-2",
        variant === "danger" && "text-red-400 hover:!text-red-400",
        classNames.root
      )}
    >
      {Icon && (
        <Icon
          size={16}
          className={cn(
            "stroke-muted-foreground",
            variant === "danger" && "stroke-red-400",
            classNames.icon
          )}
        />
      )}
      <div className={cn("flex-1", classNames.content)}>{children}</div>
      {hint && (
        <HelpTooltipIcon
          tooltip={hint}
          classNames={{ icon: classNames.hint }}
        />
      )}
    </ContextMenuItemUI>
  );
};
