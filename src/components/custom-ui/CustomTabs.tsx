import { ReactNode } from "react";
import { cn } from "@/cn";
import { Size } from "../../types";
import { Tabs, TabsList, TabsTrigger } from "../ui/Tabs";

interface Tab<T extends string = string> {
  value: T;
  label: ReactNode;
  icon?: ReactNode;
}

export interface CustomTabsProps<T extends string = string> {
  tabs: Tab<T>[];
  value?: T;
  onChange?: (value: T) => void;
  size?: Size;
  className?: string;
  disabled?: boolean;
}

const sizeStyles: Record<Size, { height: string; text: string }> = {
  xs: { height: "h-7", text: "text-xs" },
  sm: { height: "h-8", text: "text-sm" },
  md: { height: "h-9", text: "text-sm" },
  lg: { height: "h-11", text: "text-base" },
  xl: { height: "h-12", text: "text-lg" },
};

export const CustomTabs = <T extends string = string>({
  tabs,
  value,
  onChange,
  size = "md",
  className,
  disabled,
}: CustomTabsProps<T>) => {
  let foundSizeStyle = sizeStyles[size] || sizeStyles.md;
  const { height, text } = foundSizeStyle;

  return (
    <Tabs value={value} onValueChange={onChange as (value: string) => void}>
      <TabsList className={cn("px-1 py-1", height, className)}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "flex items-center gap-1.5 p-1 px-2 cursor-pointer",
              text,
              disabled && "pointer-events-none opacity-50"
            )}
            disabled={disabled}
          >
            {tab.icon}
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
