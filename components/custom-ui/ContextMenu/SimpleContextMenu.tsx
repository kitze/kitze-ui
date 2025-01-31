import React from "react";
import { ReactFC } from "../../../types";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "../../ui/ContextMenu";

export interface SimpleContextMenuClassNames {
  content?: string;
}

export interface SimpleContextMenuProps {
  children: React.ReactNode;
  content: React.ReactNode;
  classNames?: SimpleContextMenuClassNames;
}

export const SimpleContextMenu: ReactFC<SimpleContextMenuProps> = ({
  children,
  content,
  classNames = {},
}) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
      <ContextMenuContent className={classNames.content}>
        {content}
      </ContextMenuContent>
    </ContextMenu>
  );
};
