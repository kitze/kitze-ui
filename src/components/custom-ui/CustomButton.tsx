import { IconType } from "react-icons";
import { Button, ButtonProps } from "../ui/Button";
import { cn } from "@/cn";
import { ReactFC } from "../../types";
import Link from "next/link";

export interface CustomButtonClassNames {
  root?: string;
  icon?: string;
}

export interface CustomButtonProps
  extends Omit<ButtonProps, "classNames" | "as"> {
  leftIcon?: IconType;
  rightIcon?: IconType;
  classNames?: CustomButtonClassNames;
  href?: string;
  external?: boolean;
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
  let buttonProps = { ...props };
  if (href) {
    buttonProps = {
      ...buttonProps,
      ...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
      }),
    };
  }

  return (
    <Button
      href={href}
      as={href ? (external ? "a" : Link) : "button"}
      className={cn("gap-1.5", className)}
      {...buttonProps}
    >
      {LeftIcon && <LeftIcon className={cn("h-4 w-4", classNames.icon)} />}
      {children}
      {RightIcon && <RightIcon className={cn("h-4 w-4", classNames.icon)} />}
    </Button>
  );
};
