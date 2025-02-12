import { ReactFC } from "@/types";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/cn";
import { useKitzeUI } from "@/context/KitzeUIContext";
import { CustomVaul } from "../CustomVaul";
import { VaulMenuItems } from "../VaulMenuItems";
import { CustomMenuContext } from "./CustomMenuContext";

export type CustomMenuProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  responsive?: boolean;
  contentProps?: React.ComponentPropsWithoutRef<
    typeof DropdownMenuPrimitive.Content
  >;
};

export const CustomMenu: ReactFC<CustomMenuProps> = ({
  trigger,
  children,
  className,
  contentProps,
  responsive = true,
}) => {
  const { isMobile } = useKitzeUI();

  // If we're on mobile and responsive is enabled, use Vaul
  if (isMobile && responsive) {
    return (
      <CustomMenuContext.Provider value={{ responsive }}>
        <CustomVaul
          trigger={<div>{trigger}</div>}
          classNames={{
            content: className,
          }}
        >
          <VaulMenuItems>{children}</VaulMenuItems>
        </CustomVaul>
      </CustomMenuContext.Provider>
    );
  }

  // Otherwise use the default DropdownMenu
  return (
    <CustomMenuContext.Provider value={{ responsive }}>
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          {trigger}
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            className={cn(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              className
            )}
            sideOffset={4}
            {...contentProps}
          >
            {children}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </CustomMenuContext.Provider>
  );
};
