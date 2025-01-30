import React from "react";
import { ReactFC } from "../../types";
export declare const ConditionalWrap: ReactFC<{
    condition?: boolean;
    children: React.ReactNode;
    wrap: (children: React.ReactNode) => React.ReactElement;
    elseWrap?: (children: React.ReactNode) => React.ReactElement;
}>;
