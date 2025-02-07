import { cn } from "@/cn";
import { forwardRef } from "react";

const sizeClasses = {
  xs: "size-6 min-w-6 min-h-6 text-xs",
  sm: "size-8 min-w-8 min-h-8 text-sm",
  md: "size-12 min-w-12 min-h-12 text-base",
  lg: "size-16 min-w-16 min-h-16 text-lg",
  xl: "size-24 min-w-24 min-h-24 text-2xl",
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
          "rounded-full overflow-hidden h flex items-center justify-center bg-foreground/10 flex-shrink-0",
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
