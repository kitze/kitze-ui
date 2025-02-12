import React from "react";
import { cn } from "@/cn";
import { ReactFC } from "@/types";

export interface VaulMenuItemsClassNames {
  root?: string;
  item?: string;
}

export interface VaulMenuItemsProps {
  classNames?: VaulMenuItemsClassNames;
}

export const VaulMenuItems: ReactFC<VaulMenuItemsProps> = ({
  children,
  classNames = {},
}) => {
  return (
    <div className={cn("divide-y divide-border", classNames.root)}>
      {children}
    </div>
  );
};
