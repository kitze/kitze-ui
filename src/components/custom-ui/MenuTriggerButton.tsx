import { ReactFC } from "@/types";
import { cn } from "@/cn";
import { Button } from "@/components/ui/Button/Button";
import { ButtonProps } from "@/components/ui/Button/Button.types";
import { HiMenu, HiDotsVertical, HiDotsHorizontal } from "react-icons/hi";

export type MenuTriggerIconType = "menu" | "dots-vertical" | "dots-horizontal";

const iconMap = {
  menu: HiMenu,
  "dots-vertical": HiDotsVertical,
  "dots-horizontal": HiDotsHorizontal,
} as const;

export type MenuTriggerButtonProps = Omit<ButtonProps, "icon"> & {
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
  preventClick = false,
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
    <Button
      variant="ghost"
      size="sm"
      icon={iconMap[icon]}
      onClick={handleClick}
      className={cn(classNames?.root, {
        "absolute top-2 right-2 z-10": absolute,
        "opacity-0 group-hover:opacity-100 transition-opacity": onParentHover,
      })}
      classNames={{
        icon: classNames?.icon,
      }}
      {...props}
    />
  );
};
