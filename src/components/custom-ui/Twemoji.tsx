import { ReactFC, Size } from "@/types";
import { cn } from "@/cn";
import { ErrorBoundary } from "react-error-boundary";
import twemoji from "@twemoji/api";
import { useEffect, useRef, useState, Fragment } from "react";

const sizeClasses = {
  xs: "w-4 h-4",
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
} as const;

const fontSizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
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
  const content = emoji || children;
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && containerRef.current) {
      try {
        twemoji.parse(containerRef.current);
      } catch (error) {
        console.warn("Failed to parse emoji:", error);
      }
    }
  }, [isMounted, content]);

  // During SSR and initial mount, show the regular emoji
  return (
    <ErrorBoundary
      fallback={
        <div
          className={cn(
            "flex items-center justify-center",
            fontSizeClasses[size],
            className
          )}
        >
          {content}
        </div>
      }
      onError={(error: Error, info: React.ErrorInfo) => {
        console.warn("Twemoji failed to render:", error, info);
      }}
    >
      <div
        ref={containerRef}
        className={cn(
          sizeClasses[size],
          "flex items-center justify-center",
          className
        )}
      >
        {content}
      </div>
    </ErrorBoundary>
  );
};

// Regex to match emoji characters
const emojiRegex = /\p{Emoji}/u;
const emojiSequenceRegex =
  /\p{Emoji}(\p{Emoji_Modifier}|\u200D\p{Emoji})*\uFE0F?/gu;

type TwemojiAreaProps = {
  children: string;
  size?: Size;
  className?: string;
};

export const TwemojiArea: ReactFC<TwemojiAreaProps> = ({
  children,
  size = "sm",
  className,
}) => {
  if (typeof children !== "string") {
    console.warn("TwemojiArea only accepts string children");
    return <>{children}</>;
  }

  // Early return if no emojis found
  if (!emojiRegex.test(children)) {
    return <>{children}</>;
  }

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  // Reset the regex lastIndex
  emojiSequenceRegex.lastIndex = 0;

  // Find all emoji sequences and split the text
  let match;
  while ((match = emojiSequenceRegex.exec(children)) !== null) {
    const emoji = match[0];
    const startIndex = match.index;

    // Add text before the emoji
    if (startIndex > lastIndex) {
      parts.push(children.slice(lastIndex, startIndex));
    }

    // Add the wrapped emoji
    parts.push(
      <Twemoji key={`${emoji}-${startIndex}`} size={size}>
        {emoji}
      </Twemoji>
    );

    lastIndex = startIndex + emoji.length;
  }

  // Add remaining text
  if (lastIndex < children.length) {
    parts.push(children.slice(lastIndex));
  }

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </span>
  );
};
