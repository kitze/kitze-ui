import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/cn";
import { ReactFC } from "../../types";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-(--badge-color)/20 text-(--badge-color) dark:bg-(--badge-dark-color)/20 dark:text-(--badge-dark-color)",
        outline:
          "bg-(--badge-color)/10 border-1 border-(--badge-color)/30 text-(--badge-color) dark:bg-(--badge-dark-color)/10 dark:border-(--badge-dark-color)/30 dark:text-(--badge-dark-color)",
        ghost:
          "text-(--badge-color) hover:bg-(--badge-color)/10 dark:text-(--badge-dark-color) dark:hover:bg-(--badge-dark-color)/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeClassNames {
  root?: string;
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  classNames?: BadgeClassNames;
  color: string;
  darkColor?: string;
}

export const Badge: ReactFC<BadgeProps> = ({
  className,
  variant,
  color,
  darkColor = color,
  classNames = {},
  ...props
}) => {
  return (
    <div
      style={
        {
          "--badge-color": `var(--color-${color})`,
          "--badge-dark-color": darkColor
            ? `var(--color-${darkColor})`
            : `var(--color-${color})`,
        } as React.CSSProperties
      }
      className={cn(badgeVariants({ variant }), className, classNames.root)}
      {...props}
    />
  );
};
