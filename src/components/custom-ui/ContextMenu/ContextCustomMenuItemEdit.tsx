import { ReactFC } from "../../../types";
import {
  ContextCustomMenuItem,
  ContextMenuItemProps,
} from "./ContextCustomMenuItem";
import { HiPencil } from "react-icons/hi";

export type ContextMenuItemEditProps = Omit<
  ContextMenuItemProps,
  "variant" | "Icon"
>;

export const ContextCustomMenuItemEdit: ReactFC<ContextMenuItemEditProps> = ({
  children = "Edit",
  ...props
}) => {
  return (
    <ContextCustomMenuItem Icon={HiPencil} {...props}>
      {children}
    </ContextCustomMenuItem>
  );
};
