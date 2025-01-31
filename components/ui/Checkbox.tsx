import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { HiCheck } from "react-icons/hi";
import { cn } from "../../cn";
import { ReactFC } from "../../types";

export interface CheckboxClassNames {
  root?: string;
  indicator?: string;
}

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  classNames?: CheckboxClassNames;
}

export const Checkbox: ReactFC<CheckboxProps> = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, classNames = {}, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
      classNames.root
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center text-current",
        classNames.indicator
      )}
    >
      <HiCheck className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = "Checkbox";
