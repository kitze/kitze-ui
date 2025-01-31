import { HiQuestionMarkCircle } from "react-icons/hi";
import { cn } from "@/cn";
import { ReactFC } from "../../types";
import { SimpleTooltip } from "./SimpleTooltip";

export interface HelpTooltipIconClassNames {
  icon?: string;
}

export interface HelpTooltipIconProps {
  tooltip: string;
  size?: number;
  classNames?: HelpTooltipIconClassNames;
}

export const HelpTooltipIcon: ReactFC<HelpTooltipIconProps> = ({
  tooltip,
  size = 14,
  classNames = {},
}) => {
  return (
    <SimpleTooltip content={tooltip}>
      <HiQuestionMarkCircle
        size={size}
        className={cn("text-muted-foreground opacity-50", classNames.icon)}
      />
    </SimpleTooltip>
  );
};
