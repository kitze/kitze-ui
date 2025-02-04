import { ReactFC } from "@/types";
import { SegmentedControlOption } from "./SegmentedControl";
import { VaulMenuItem } from "./VaulMenuItem";
import { cn } from "@/cn";

export interface ResponsiveSegmentedControlMobileMenuItemProps<T extends string> {
  option: SegmentedControlOption<T>;
  isSelected: boolean;
  onChange: (value: T) => void;
  closeOnClick?: boolean;
}

export const ResponsiveSegmentedControlMobileMenuItem = <T extends string>({
  option,
  isSelected,
  onChange,
  closeOnClick = true,
}: ResponsiveSegmentedControlMobileMenuItemProps<T>) => {
  const Icon = typeof option.icon === "function" ? option.icon : undefined;

  return (
    <VaulMenuItem
      key={option.value}
      title={option.label}
      closeOnClick={closeOnClick}
      icon={Icon}
      onClick={() => onChange(option.value)}
      classNames={{
        root: cn(
          "py-3",
          isSelected && "bg-foreground/5 dark:bg-foreground/10"
        ),
      }}
    />
  );
};
