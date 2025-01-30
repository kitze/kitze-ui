import { ReactFC } from "../../types";
export interface PillClassNames {
    wrapper?: string;
    icon?: string;
    text?: string;
}
export interface PillProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    classNames?: PillClassNames;
}
export declare const Pill: ReactFC<PillProps>;
