import { ReactFC } from "@/types"
import { cn } from "@/cn"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select"
import { useKitzeUI } from "../../context/KitzeUIContext"

export type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}

export type CustomSelectProps = {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  nativeOnMobile?: boolean
  classNames?: {
    trigger?: string
    content?: string
    item?: string
    nativeSelect?: string
  }
}

export const CustomSelect: ReactFC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled,
  nativeOnMobile = true,
  classNames = {},
}) => {
  const { isMobile } = useKitzeUI()

  if (isMobile && nativeOnMobile) {
    return (
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className={cn(
          "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
    )
  }

  return (
    <Select value={value} onValueChange={onChange} disabled={disabled}>
      <SelectTrigger className={cn("w-full", classNames.trigger)}>
        <SelectValue placeholder={placeholder} />
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
  )
} 