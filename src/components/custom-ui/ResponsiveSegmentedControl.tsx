import { useKitzeUI } from "../../context/KitzeUIContext";
import {
  SegmentedControl,
  SegmentedControlProps,
  SegmentedControlOption,
} from "./SegmentedControl";
import { VaulMenuItems, VaulMenuItemsProps } from "./VaulMenuItems";
import { VaulMenuItem } from "./VaulMenuItem";
import { cn } from "@/cn";
import { CustomVaul } from "./CustomVaul";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { CustomButton } from "./CustomButton";

export interface ResponsiveSegmentedControlProps<T extends string>
  extends SegmentedControlProps<T> {
  vaulMenuItemsProps?: Partial<VaulMenuItemsProps>;
  closeOnClick?: boolean;
  getSelectedOption?: (
    options: SegmentedControlOption<T>[],
    value: T
  ) => SegmentedControlOption<T> | undefined;
}

export const ResponsiveSegmentedControl = <T extends string>({
  vaulMenuItemsProps,
  closeOnClick = true,
  ...props
}: ResponsiveSegmentedControlProps<T>) => {
  const { isMobile } = useKitzeUI();

  const selectedOption = props.getSelectedOption
    ? props.getSelectedOption(props.options, props.value)
    : props.options.find((opt) => 
        opt.isSelected ? opt.isSelected(props.value) : opt.value === props.value
      );

  const Icon =
    typeof selectedOption?.icon === "function"
      ? selectedOption.icon
      : undefined;

  if (isMobile) {
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
          {props.options.map((option) => (
            <VaulMenuItem
              key={option.value}
              title={option.label}
              closeOnClick={closeOnClick}
              icon={typeof option.icon === "function" ? option.icon : undefined}
              onClick={() => props.onChange(option.value)}
              classNames={{
                root: cn(
                  "py-3",
                  option.value === selectedOption?.value &&
                    "bg-foreground/5 dark:bg-foreground/10"
                ),
              }}
            />
          ))}
        </VaulMenuItems>
      </CustomVaul>
    );
  }

  return <SegmentedControl {...props} />;
};
