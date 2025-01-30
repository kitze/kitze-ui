import { ReactNode } from "react";
import { ReactFC } from "../../types";
export interface MobileHeaderClassNames {
    root?: string;
    container?: string;
    leftSide?: string;
    middle?: string;
    rightSide?: string;
    menuButton?: string;
}
export interface MobileHeaderProps {
    leftSide?: ReactNode;
    middle?: ReactNode;
    drawerContent?: ReactNode;
    classNames?: MobileHeaderClassNames;
}
export declare const MobileHeader: ReactFC<MobileHeaderProps>;
