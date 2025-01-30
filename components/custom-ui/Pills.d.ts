import { PillProps } from "./Pill";
import { ReactFC } from "../../types";
export interface PillsClassNames {
    wrapper?: string;
}
export interface PillsProps {
    selectedId: string;
    items: Array<{
        id: string;
        title: string;
    }>;
    onSelect: (id: string) => void;
    includeAll?: boolean;
    allLabel?: string;
    classNames?: PillsClassNames;
    pillProps?: Partial<PillProps>;
}
export declare const Pills: ReactFC<PillsProps>;
