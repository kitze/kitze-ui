import { ReactFC } from "../../types";
interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
    onClose?: () => void;
    onForceClose?: () => void;
}
export declare const SearchBar: ReactFC<SearchBarProps>;
export {};
