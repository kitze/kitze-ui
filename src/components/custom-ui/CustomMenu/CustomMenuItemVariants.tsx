import { ReactFC } from "@/types";
import { CustomMenuItem, CustomMenuItemProps } from "./CustomMenuItem";
import { LuPencil, LuTrash2 } from "react-icons/lu";

type CustomMenuItemVariantProps = Omit<
  CustomMenuItemProps,
  "icon" | "children"
> & {
  children?: React.ReactNode;
};

export const CustomMenuItemEdit: ReactFC<CustomMenuItemVariantProps> = ({
  children = "Edit",
  ...props
}) => {
  return (
    <CustomMenuItem icon={LuPencil} {...props}>
      {children}
    </CustomMenuItem>
  );
};

export const CustomMenuItemDelete: ReactFC<CustomMenuItemVariantProps> = ({
  children = "Delete",
  ...props
}) => {
  return (
    <CustomMenuItem icon={LuTrash2} {...props}>
      {children}
    </CustomMenuItem>
  );
};
