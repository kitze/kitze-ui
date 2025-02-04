import { ReactFC } from "@/types";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/cn";
import { useLinkableComponent, LinkableProps } from "../../../hooks/useLinkableComponent";

export type CustomMenuItemProps = LinkableProps & {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  iconClassName?: string;
  children: React.ReactNode;
};

export const CustomMenuItem: ReactFC<CustomMenuItemProps> = ({
  children,
  className,
  disabled,
  onClick,
  icon: Icon,
  iconClassName = "h-4 w-4",
  href,
  external,
  ...props
}) => {
  const { Component, href: linkHref, linkProps } = useLinkableComponent({
    href,
    external,
    ...props,
  });

  const MenuItem = (
    <DropdownMenuPrimitive.Item
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
        {
          "cursor-not-allowed opacity-30": disabled,
        }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon className={cn(iconClassName)} />}
      {children}
    </DropdownMenuPrimitive.Item>
  );

  if (Component) {
    return (
      <Component href={linkHref} {...linkProps}>
        {MenuItem}
      </Component>
    );
  }

  return MenuItem;
};
