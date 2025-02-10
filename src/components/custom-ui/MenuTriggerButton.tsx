import { ReactFC } from "@/types";
import { cn } from "@/cn";
import { ActionIcon, ActionIconProps } from "./ActionIcon";
import { HiMenu, HiDotsVertical, HiDotsHorizontal } from "react-icons/hi";

export type MenuTriggerIconType = "menu" | "dots-vertical" | "dots-horizontal";

const iconMap = {
  menu: HiMenu,
  "dots-vertical": HiDotsVertical,
  "dots-horizontal": HiDotsHorizontal,
} as const;

export type MenuTriggerButtonProps = Omit<ActionIconProps, "Icon"> & {
  icon?: MenuTriggerIconType;
  preventClick?: boolean;
  classNames?: {
    root?: string;
    icon?: string;
  };
  absolute?: boolean;
  onParentHover?: boolean;
};

export const MenuTriggerButton: ReactFC<MenuTriggerButtonProps> = ({
  icon = "menu",
  preventClick = true,
  onClick,
  classNames,
  absolute = false,
  onParentHover = false,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (preventClick) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClick?.(e);
  };

  return (
    <ActionIcon
      Icon={iconMap[icon]}
      onClick={handleClick}
      variant="ghost"
      classNames={{
        root: cn(classNames?.root, {
          "absolute top-2 right-2 z-10": absolute,
          "opacity-0 group-hover:opacity-100 transition-opacity": onParentHover,
        }),
        icon: classNames?.icon,
      }}
      {...props}
    />
  );
};
