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
  // Convert children to array to handle React.Children methods
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={cn("divide-y divide-border", classNames.root)}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={cn("first:pt-0 last:pb-0", classNames.item)}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
