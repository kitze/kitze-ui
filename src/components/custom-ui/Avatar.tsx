import { cn } from "@/cn";
import { forwardRef } from "react";

const sizeClasses = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-14 h-14 text-xl",
} as const;

export type AvatarSize = keyof typeof sizeClasses;

export interface AvatarProps {
  src?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, name = "", size = "md", className }, ref) => {
    const getInitials = (name: string) => {
      const words = name.trim().split(" ");
      if (words.length === 1) {
        return words[0].charAt(0).toUpperCase();
      }
      return `${words[0].charAt(0)}${words[words.length - 1].charAt(
        0
      )}`.toUpperCase();
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-full overflow-hidden h flex items-center justify-center bg-foreground/10",
          sizeClasses[size],
          className
        )}
      >
        {src ? (
          <img
            src={src}
            alt={name || "Avatar"}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-medium select-none cursor-default text-foreground">
            {name ? getInitials(name) : "?"}
          </span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
