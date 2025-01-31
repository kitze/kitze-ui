import { Checkbox, CheckboxProps } from "../ui/Checkbox";
import { cn } from "@/cn";
import { ReactFC } from "../../types";

export interface CustomCheckboxClassNames {
  root?: string;
  checkbox?: string;
  label?: string;
}

export interface CustomCheckboxProps
  extends Omit<CheckboxProps, "classNames" | "onChange"> {
  label?: string;
  classNames?: CustomCheckboxClassNames;
  onChange?: (checked: boolean) => void;
}

export const CustomCheckbox: ReactFC<CustomCheckboxProps> = ({
  label,
  id,
  classNames = {},
  onChange,
  ...props
}) => {
  return (
    <div className={cn("flex items-center space-x-2", classNames.root)}>
      <Checkbox
        id={id}
        className={classNames.checkbox}
        onCheckedChange={onChange}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "text-sm font-medium leading-none",
            "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            classNames.label
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};
