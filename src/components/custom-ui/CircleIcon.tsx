import { cn } from "@/cn";
import { Size, ReactFC } from "@/types";
import { IconType } from "react-icons";
import { cva, type VariantProps } from "class-variance-authority";

const circleIconVariants = cva(
  "v center rounded-full transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-(--circle-color)/20",
        outline: "bg-(--circle-color)/10 border-1 border-(--circle-color)/30",
        ghost: "hover:bg-(--circle-color)/10",
      },
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-14 w-14",
      },
      hoverable: {
        true: "hover:bg-(--circle-color)/20",
      },
      clickable: {
        true: "cursor-pointer active:bg-(--circle-color)/30",
      },
    },
    compoundVariants: [
      {
        hoverable: true,
        clickable: true,
        className: "",
      },
    ],
    defaultVariants: {
      variant: "outline",
      size: "md",
      hoverable: false,
      clickable: false,
    },
  }
);

const iconVariants = cva("opacity-90", {
  variants: {
    variant: {
      default: "stroke-(--circle-color)",
      outline: "stroke-(--circle-color)",
      ghost: "stroke-(--circle-color)",
    },
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-7",
    },
  },
});

export interface CircleIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof circleIconVariants> {
  Icon: IconType;
  color: string;
  iconClassName?: string;
}

export const CircleIcon: ReactFC<CircleIconProps> = ({
  Icon,
  color,
  size,
  className,
  iconClassName,
  variant = "default",
  hoverable,
  clickable,
  onClick,
  ...props
}) => {
  return (
    <div
      style={
        { "--circle-color": `var(--color-${color})` } as React.CSSProperties
      }
      className={cn(
        circleIconVariants({ variant, size, hoverable, clickable, className })
      )}
      onClick={clickable ? onClick : undefined}
      {...props}
    >
      <Icon className={cn(iconVariants({ variant, size }), iconClassName)} />
    </div>
  );
};
