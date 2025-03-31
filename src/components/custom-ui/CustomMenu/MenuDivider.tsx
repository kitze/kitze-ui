import { ReactFC } from "@/types";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/cn";
import { useCustomMenu } from "./CustomMenuContext";

export type MenuDividerProps = {
  className?: string;
};

export const MenuDivider: ReactFC<MenuDividerProps> = ({ className }) => {
  const { responsive } = useCustomMenu();

  // If responsive is enabled, use a simple div for Vaul
  if (responsive) {
    return <div className={cn("my-1 h-px bg-border", className)} />;
  }

  // Otherwise use Radix UI's DropdownMenuSeparator
  return (
    <DropdownMenuPrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-border", className)}
    />
  );
};
