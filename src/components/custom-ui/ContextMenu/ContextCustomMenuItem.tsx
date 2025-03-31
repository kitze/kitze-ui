import React from "react";
import { ReactFC } from "@/types";
import { ContextMenuItem as ContextMenuItemUI } from "@/components/ui/ContextMenu";
import { useBaseMenuItem, BaseMenuItemProps } from "../MenuItem/BaseMenuItem";

export type ContextCustomMenuItemProps = BaseMenuItemProps;

export const ContextCustomMenuItem: ReactFC<ContextCustomMenuItemProps> = (
  props
) => {
  const { itemProps, renderContent } = useBaseMenuItem(props);
  return (
    <ContextMenuItemUI {...itemProps}>{renderContent()}</ContextMenuItemUI>
  );
};
