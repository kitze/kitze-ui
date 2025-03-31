import { ReactNode } from "react";
import { cn } from "@/cn";
import { CustomTabs, CustomTabsProps } from "./CustomTabs";

// Keep the Option type for backwards compatibility
interface Option<T extends string = string> {
  value: T;
  label: ReactNode;
  icon?: ReactNode;
}

export interface SegmentedControlProps<T extends string = string>
  extends Omit<CustomTabsProps<T>, "tabs"> {
  options: Option<T>[];
}

export const SegmentedControl = <T extends string = string>({
  options,
  ...props
}: SegmentedControlProps<T>) => {
  return (
    <CustomTabs {...props} tabs={options} className={cn(props.className)} />
  );
};
