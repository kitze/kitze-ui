import { IconType } from "react-icons";
import { Button, ButtonProps } from "../ui/Button";
import { cn } from "../../cn";
import { ReactFC } from "../../types";

export interface CustomButtonClassNames {
  root?: string;
  icon?: string;
}

export interface CustomButtonProps extends Omit<ButtonProps, "classNames"> {
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
  ...props
}) => {
  return (
    <Button
      className={cn("gap-1.5", className)}
      classNames={{ root: classNames.root }}
      {...props}
    >
      {LeftIcon && <LeftIcon className={cn("h-4 w-4", classNames.icon)} />}
      {children}
      {RightIcon && <RightIcon className={cn("h-4 w-4", classNames.icon)} />}
    </Button>
  );
};
