import { ReactFC } from "../../../types";
import {
  ContextCustomMenuItem,
  ContextCustomMenuItemProps,
} from "./ContextCustomMenuItem";
import { HiPencil } from "react-icons/hi";

export type ContextMenuItemEditProps = Omit<
  ContextCustomMenuItemProps,
  "variant" | "icon"
>;

export const ContextCustomMenuItemEdit: ReactFC<ContextMenuItemEditProps> = ({
  children = "Edit",
  ...props
}) => {
  return (
    <ContextCustomMenuItem icon={HiPencil} {...props}>
      {children}
    </ContextCustomMenuItem>
  );
};
