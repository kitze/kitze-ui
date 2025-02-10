import { ReactFC, Size } from "@/types";
import { cn } from "@/cn";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { cva, type VariantProps } from "class-variance-authority";

const segmentedControlVariants = cva("transition-colors rounded-md p-1", {
  variants: {
    variant: {
      default: "bg-foreground/5 dark:bg-foreground/10",
      outline: "border border-foreground/10 dark:border-foreground/20",
      ghost: "",
    },
    size: {
      xs: "h-8",
      sm: "h-9",
      md: "h-10",
      lg: "h-11",
      xl: "h-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const triggerVariants = cva(
  "flex items-center gap-2 cursor-pointer transition-all duration-150 ease-in-out rounded-[4px]",
  {
    variants: {
      variant: {
        default: [
          "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
          "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground/90",
        ],
        outline: [
          "data-[state=active]:bg-foreground/5 data-[state=active]:text-foreground",
          "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground/90",
        ],
        ghost: [
          "data-[state=active]:text-foreground",
          "data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground/90",
          "hover:bg-foreground/5 dark:hover:bg-foreground/10",
        ],
      },
      size: {
        xs: "h-6 px-2.5 text-xs min-w-[48px]",
        sm: "h-7 px-3 text-sm min-w-[56px]",
        md: "h-8 px-3.5 text-sm min-w-[64px]",
        lg: "h-9 px-4 text-base min-w-[72px]",
        xl: "h-10 px-5 text-base min-w-[80px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export type SegmentedControlOption<T extends string> = {
  value: T;
  label: string;
  icon?: React.ReactNode;
  isSelected?: (value: T) => boolean;
};

export type SegmentedControlProps<T extends string> = {
  value: T;
  onChange?: (value: T) => void;
  options: SegmentedControlOption<T>[];
  variant?: VariantProps<typeof segmentedControlVariants>["variant"];
  size?: Size;
  classNames?: {
    root?: string;
    trigger?: string;
  };
};

export const SegmentedControl = <T extends string>({
  value,
  onChange,
  options,
  variant = "default",
  size = "md",
  classNames,
}: SegmentedControlProps<T>) => {
  // Convert the generic value to string for Tabs component
  const handleChange = (newValue: string) => {
    // Since we know our options are of type T, this cast is safe
    onChange?.(newValue as T);
  };

  return (
    <Tabs value={value} onValueChange={handleChange}>
      <TabsList
        className={cn(
          segmentedControlVariants({ variant, size }),
          classNames?.root
        )}
      >
        {options.map((option) => (
          <TabsTrigger
            key={option.value}
            value={option.value}
            className={cn(
              triggerVariants({ variant, size }),
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
