import { ReactFC } from "../../types";
interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    id?: string;
    className?: string;
    disabled?: boolean;
}
export declare const Checkbox: ReactFC<CheckboxProps>;
export {};
