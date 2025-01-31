import React from "react";
import { ReactFC } from "../../types";
import { SimpleTooltip } from "./SimpleTooltip";

interface ConditionalTooltipClassNames {
  wrapper?: string;
  tooltip?: string;
  content?: string;
}

interface ConditionalTooltipProps {
  condition?: boolean;
  content?: string;
  children: React.ReactNode;
  classNames?: ConditionalTooltipClassNames;
}

export const ConditionalTooltip: ReactFC<ConditionalTooltipProps> = ({
  condition,
  content,
  children,
  classNames = {},
}) => {
  if (!condition || !content) {
    return <>{children}</>;
  }

  return (
    <SimpleTooltip
      content={content}
      className={classNames.wrapper}
      tooltipClassName={classNames.tooltip}
    >
      {children}
    </SimpleTooltip>
  );
};
