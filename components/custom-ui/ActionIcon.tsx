import { IconType } from "react-icons";
import { cn } from "../../cn";
import { ReactFC } from "../../types";
import { ConditionalTooltip } from "./ConditionalTooltip";
import { Button, ButtonProps } from "../ui/Button";

export interface ActionIconClassNames {
  root?: string;
  icon?: string;
  tooltip?: string;
}

export interface ActionIconProps
  extends Omit<ButtonProps, "classNames" | "size"> {
  Icon: IconType;
  tooltip?: string;
  iconSize?: number;
  classNames?: ActionIconClassNames;
}

export const ActionIcon: ReactFC<ActionIconProps> = ({
  Icon,
  onClick,
  title,
  tooltip,
  iconSize = 20,
  classNames = {},
  variant = "secondary",
  className,
  ...props
}) => {
  const button = (
    <Button
      onClick={onClick}
      title={title}
      variant={variant}
      size="icon"
      className={cn(
        "h-10 w-10 cursor-pointer rounded-lg flex items-center justify-center transition-all",
        className
      )}
      classNames={{
        root: classNames.root,
      }}
      {...props}
    >
      <Icon size={iconSize} className={cn(classNames.icon)} />
    </Button>
  );

  return (
    <ConditionalTooltip
      condition={!!tooltip}
      content={tooltip}
      classNames={{
        tooltip: classNames.tooltip,
      }}
    >
      {button}
    </ConditionalTooltip>
  );
};
