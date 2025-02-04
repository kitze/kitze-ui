import { IconType } from "react-icons";
import { cn } from "@/cn";
import { ReactFC } from "../../types";
import { ConditionalTooltip } from "./ConditionalTooltip";

export interface HoverableIconClassNames {
  root?: string;
  icon?: string;
  tooltip?: string;
}

export interface HoverableIconProps {
  Icon: IconType;
  href: string;
  size?: number;
  hoverColor?: string;
  defaultColor?: string;
  tooltip?: string;
  classNames?: HoverableIconClassNames;
}

export const HoverableIcon: ReactFC<HoverableIconProps> = ({
  Icon,
  href,
  size = 16,
  hoverColor,
  defaultColor = "text-gray-500 dark:text-gray-400",
  tooltip,
  classNames = {},
}) => {
  const iconElement = (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        defaultColor,
        "transition-colors",
        hoverColor,
        classNames.root
      )}
    >
      <Icon className={cn(`w-${size} h-${size}`, classNames.icon)} />
    </a>
  );

  return (
    <ConditionalTooltip
      condition={!!tooltip}
      content={tooltip}
      classNames={{ tooltip: classNames.tooltip }}
    >
      {iconElement}
    </ConditionalTooltip>
  );
};
