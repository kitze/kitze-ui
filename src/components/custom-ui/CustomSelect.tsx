import { ReactFC } from "@/types";
import { cn } from "@/cn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import { useKitzeUI } from "../../context/KitzeUIContext";
import { Spinner } from "../ui/Spinner";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type CustomSelectProps = {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  nativeOnMobile?: boolean;
  classNames?: {
    trigger?: string;
    content?: string;
    item?: string;
    nativeSelect?: string;
  };
};

export const CustomSelect: ReactFC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled,
  loading,
  nativeOnMobile = true,
  classNames = {},
}) => {
  const { isMobile } = useKitzeUI();

  if (isMobile && nativeOnMobile) {
    return (
      <div className="relative">
        <select
          value={value}
          onChange={(e) => {
            onChange?.(e.target.value);
          }}
          disabled={disabled || loading}
          className={cn(
            "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
            "cursor-pointer hover:bg-accent hover:text-accent-foreground active:scale-[0.98] transition-all",
            "focus:outline-none focus:ring-1 focus:ring-ring/30 focus:ring-offset-1 focus:ring-offset-background",
            classNames.nativeSelect
          )}
        >
          {!value && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {loading && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <Spinner size="sm" />
          </div>
        )}
      </div>
    );
  }

  return (
    <Select
      value={value}
      onValueChange={(v) => {
        onChange?.(v);
      }}
      disabled={disabled || loading}
    >
      <SelectTrigger className={cn("w-full relative", classNames.trigger)}>
        <SelectValue placeholder={placeholder} />
        {loading && (
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <Spinner size="sm" />
          </div>
        )}
      </SelectTrigger>
      <SelectContent className={classNames.content}>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            className={classNames.item}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
