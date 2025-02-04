import { ReactFC } from "@/types";
import { SegmentedControlProps } from "./SegmentedControl";
import { VaulMenuItems, VaulMenuItemsProps } from "./VaulMenuItems";
import { CustomVaul } from "./CustomVaul";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { CustomButton } from "./CustomButton";
import { ResponsiveSegmentedControlMobileMenuItem } from "./ResponsiveSegmentedControlMobileMenuItem";

export interface ResponsiveSegmentedControlMobileProps<T extends string>
  extends SegmentedControlProps<T> {
  vaulMenuItemsProps?: Partial<VaulMenuItemsProps>;
  closeOnClick?: boolean;
}

export const ResponsiveSegmentedControlMobile = <T extends string>({
  options,
  value,
  onChange,
  vaulMenuItemsProps,
  closeOnClick = true,
}: ResponsiveSegmentedControlMobileProps<T>) => {
  const selectedOption = options.find((opt) => opt.value === value);
  const Icon = typeof selectedOption?.icon === "function" ? selectedOption.icon : undefined;

  return (
    <CustomVaul
      trigger={
        <CustomButton
          leftIcon={Icon}
          variant="ghost"
          className="w-full justify-between bg-foreground/5 dark:bg-foreground/10 hover:bg-foreground/10 dark:hover:bg-foreground/20"
        >
          {selectedOption?.label}
          <div className="vertical -space-y-1">
            <FiChevronUp className="size-3" />
            <FiChevronDown className="size-3" />
          </div>
        </CustomButton>
      }
    >
      <VaulMenuItems {...vaulMenuItemsProps}>
        {options.map((option) => (
          <ResponsiveSegmentedControlMobileMenuItem
            key={option.value}
            option={option}
            isSelected={option.value === value}
            onChange={onChange}
            closeOnClick={closeOnClick}
          />
        ))}
      </VaulMenuItems>
    </CustomVaul>
  );
};
