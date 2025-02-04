import { IconType } from "react-icons";
import { Button, ButtonProps } from "../ui/Button";
import { cn } from "@/cn";
import { ReactFC } from "../../types";
import {
  useLinkableComponent,
  LinkableProps,
} from "../../hooks/useLinkableComponent";

export interface CustomButtonClassNames {
  root?: string;
  icon?: string;
}

export interface CustomButtonProps
  extends Omit<ButtonProps, "classNames" | "as">,
    LinkableProps {
  leftIcon?: IconType;
  rightIcon?: IconType;
  classNames?: CustomButtonClassNames;
}

export const CustomButton: ReactFC<CustomButtonProps> = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  className,
  classNames = {},
  href,
  external,
  ...props
}) => {
  const {
    Component,
    href: linkHref,
    linkProps,
  } = useLinkableComponent({
    href,
    external,
    ...props,
  });

  return (
    <Button
      href={linkHref}
      as={(Component || "button") as any}
      className={cn("gap-1.5", className)}
      {...linkProps}
    >
      {LeftIcon && <LeftIcon className={cn("h-4 w-4", classNames.icon)} />}
      {children}
      {RightIcon && <RightIcon className={cn("h-4 w-4", classNames.icon)} />}
    </Button>
  );
};
