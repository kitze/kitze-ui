import { ReactFC, Size } from "@/types";
import { cn } from "@/cn";
import TwemojiReact from "react-twemoji";

const sizeClasses = {
  xs: "w-4 h-4",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
} as const;

export type TwemojiProps = {
  emoji?: string;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

export const Twemoji: ReactFC<TwemojiProps> = ({
  emoji,
  size = "md",
  className,
  children,
}) => {
  return (
    <TwemojiReact noWrapper={true}>
      <div
        className={cn(
          sizeClasses[size],
          "flex items-center justify-center",
          className
        )}
      >
        {emoji || children}
      </div>
    </TwemojiReact>
  );
};
