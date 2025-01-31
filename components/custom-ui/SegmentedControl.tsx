import { cn } from "../../cn";
import { Tabs, TabsList, TabsTrigger } from "../ui/Tabs";

export type SegmentedControlOption<T extends string> = {
  value: T;
  label: string;
  icon?: React.ReactNode;
};

type SegmentedControlProps<T extends string> = {
  value: T;
  onChange: (value: T) => void;
  options: SegmentedControlOption<T>[];
  className?: string;
};

export const SegmentedControl = <T extends string>({
  value,
  onChange,
  options,
  className,
}: SegmentedControlProps<T>) => {
  return (
    <Tabs value={value} onValueChange={onChange as (value: string) => void}>
      <TabsList className={cn("h-8 bg-muted", className)}>
        {options.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 text-xs",
              "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
              "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground",
              "transition-all duration-150 ease-in-out"
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
