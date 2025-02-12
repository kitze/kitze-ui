import { ReactFC } from "@/types";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/cn";
import {
  useLinkableComponent,
  LinkableProps,
} from "../../../hooks/useLinkableComponent";
import { useKitzeUI } from "@/context/KitzeUIContext";
import { VaulMenuItem } from "../VaulMenuItem";
import { useCustomMenu } from "./CustomMenuContext";

export type CustomMenuItemProps = LinkableProps & {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  iconClassName?: string;
  children: React.ReactNode;
  preventPropagation?: boolean;
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
  preventPropagation,
  ...props
}) => {
  const { isMobile } = useKitzeUI();
  const { responsive } = useCustomMenu();
  const {
    Component,
    href: linkHref,
    linkProps,
  } = useLinkableComponent({
    href,
    external,
    ...props,
  });

  const handleClick = (e: React.MouseEvent) => {
    if (preventPropagation) {
      e.stopPropagation();
    }
    onClick?.();
  };

  // If we're on mobile and responsive is enabled, use VaulMenuItem
  if (isMobile && responsive) {
    return (
      <VaulMenuItem
        href={href}
        icon={Icon as any}
        title={children as string}
        onClick={onClick}
        closeOnClick
        classNames={{
          root: cn(className, {
            "opacity-50 pointer-events-none": disabled,
          }),
          icon: iconClassName,
        }}
      />
    );
  }

  // Otherwise use the default DropdownMenuItem
  const MenuItem = (
    <DropdownMenuPrimitive.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
        {
          "cursor-not-allowed opacity-30": disabled,
        }
      )}
      disabled={disabled}
      onClick={handleClick}
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
