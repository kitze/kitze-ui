import React from "react";
import { ReactFC } from "../../types";
interface CustomVaulProps {
    title?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: React.ReactNode;
}
export declare const CustomVaul: ReactFC<CustomVaulProps>;
export {};
