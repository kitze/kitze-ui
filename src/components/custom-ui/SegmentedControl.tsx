import { ReactFC } from "@/types";
import { cn } from "@/cn";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export type SegmentedControlOption<T extends string> = {
  value: T;
  label: string;
  icon?: React.ReactNode;
  isSelected?: (value: T) => boolean;
};

export type SegmentedControlProps<T extends string> = {
  value: T;
  onChange: (value: T) => void;
  options: SegmentedControlOption<T>[];
  classNames?: {
    root?: string;
    trigger?: string;
  };
};

export const SegmentedControl = <T extends string>({
  value,
  onChange,
  options,
  classNames,
}: SegmentedControlProps<T>) => {
  // Convert the generic value to string for Tabs component
  const handleChange = (newValue: string) => {
    // Since we know our options are of type T, this cast is safe
    onChange(newValue as T);
  };

  return (
    <Tabs value={value} onValueChange={handleChange}>
      <TabsList className={cn("h-8 bg-foreground/5 dark:bg-foreground/10", classNames?.root)}>
        {options.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 text-xs cursor-pointer",
              "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
              "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground/90",
              "transition-all duration-150 ease-in-out",
              classNames?.trigger
            )}
          >
            {option.icon}
            {option.label && <span>{option.label}</span>}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
