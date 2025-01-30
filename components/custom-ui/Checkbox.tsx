import { cn } from "../../cn";
import { ReactFC } from "../../types";
import { HiCheck } from "react-icons/hi";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
}

export const Checkbox: ReactFC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  id,
  className,
  disabled = false,
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className={cn(
            "h-5 w-5 rounded border-gray-300 cursor-pointer",
            "text-violet-600 focus:ring-violet-500",
            "transition-colors duration-200",
            disabled && "cursor-not-allowed opacity-50"
          )}
        />
        <HiCheck
          className={cn(
            "absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none",
            "transition-opacity duration-200",
            checked ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "text-sm text-gray-700 select-none",
            disabled && "cursor-not-allowed opacity-50",
            !disabled && "cursor-pointer"
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};
