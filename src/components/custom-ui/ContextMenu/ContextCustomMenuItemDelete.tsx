import { ReactNode } from "react";
import {
  ContextCustomMenuItem,
  ContextMenuItemProps,
} from "./ContextCustomMenuItem";
import { HiTrash } from "react-icons/hi";

export type ContextMenuItemDeleteProps = Omit<
  ContextMenuItemProps,
  "variant" | "Icon"
> & {
  children?: ReactNode;
};

export const ContextCustomMenuItemDelete: React.FC<
  ContextMenuItemDeleteProps
> = ({ children = "Delete", ...props }) => {
  return (
    <ContextCustomMenuItem variant="danger" Icon={HiTrash} {...props}>
      {children}
    </ContextCustomMenuItem>
  );
};
