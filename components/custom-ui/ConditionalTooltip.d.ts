import React from "react";
import { ReactFC } from "../../types";
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
export declare const ConditionalTooltip: ReactFC<ConditionalTooltipProps>;
export {};
