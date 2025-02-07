import { ReactFC } from "@/types";
import { cn } from "@/cn";
import { motion } from "framer-motion";
import { HiBadgeCheck } from "react-icons/hi";
import { cva, type VariantProps } from "class-variance-authority";

const proBadgeVariants = cva("relative", {
  variants: {
    variant: {
      default: "",
      solid: "p-1.5 rounded-full",
      outline: "p-1.5 rounded-full border-2",
      glow: "p-1.5 rounded-full",
      outerglow: "p-1.5 rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ProBadgeClassNames {
  root?: string;
  glow?: string;
  icon?: string;
}

export interface ProBadgeProps extends VariantProps<typeof proBadgeVariants> {
  color?: string;
  darkColor?: string;
  classNames?: ProBadgeClassNames;
  className?: string;
}

export const ProBadge: ReactFC<ProBadgeProps> = ({
  color = "violet-400",
  darkColor = color,
  variant,
  classNames = {},
  className,
}) => {
  const showGlow = variant === 'glow' || variant === 'outerglow';
  const glowSize = variant === 'outerglow' ? 'inset-[-0.5rem]' : 'inset-0';

  return (
    <div
      style={
        {
          "--pro-badge-color": `var(--color-${color})`,
          "--pro-badge-dark-color": `var(--color-${darkColor})`,
        } as React.CSSProperties
      }
      className={cn(
        proBadgeVariants({ variant }),
        {
          "bg-(--pro-badge-color)/10 dark:bg-(--pro-badge-dark-color)/10": variant === 'solid',
          "border-(--pro-badge-color) dark:border-(--pro-badge-dark-color)": variant === 'outline',
          "bg-(--pro-badge-color)/5 dark:bg-(--pro-badge-dark-color)/5": variant === 'glow' || variant === 'outerglow',
        },
        className,
        classNames.root
      )}
    >
      {showGlow && (
        <motion.div
          className={cn(
            "absolute rounded-full",
            glowSize,
            "bg-(--pro-badge-color)/30 dark:bg-(--pro-badge-dark-color)/30",
            "blur-md",
            classNames.glow
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      <HiBadgeCheck
        className={cn(
          "relative w-6 h-6",
          "text-(--pro-badge-color) dark:text-(--pro-badge-dark-color)",
          classNames.icon
        )}
      />
    </div>
  );
}; 