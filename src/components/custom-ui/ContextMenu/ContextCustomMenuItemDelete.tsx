import { ReactNode } from "react";
import {
  ContextCustomMenuItem,
  ContextCustomMenuItemProps,
} from "./ContextCustomMenuItem";
import { HiTrash } from "react-icons/hi";

export type ContextMenuItemDeleteProps = Omit<
  ContextCustomMenuItemProps,
  "variant" | "icon"
> & {
  children?: ReactNode;
};

export const ContextCustomMenuItemDelete: React.FC<
  ContextMenuItemDeleteProps
> = ({ children = "Delete", ...props }) => {
  return (
    <ContextCustomMenuItem variant="danger" icon={HiTrash} {...props}>
      {children}
    </ContextCustomMenuItem>
  );
};
