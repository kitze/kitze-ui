import { ReactFC, Size } from "@/types";
import { cn } from "@/cn";
import { ErrorBoundary } from "react-error-boundary";
import twemoji from "@twemoji/api";
import {
  useEffect,
  useRef,
  useState,
  Children,
  isValidElement,
  cloneElement,
  ReactNode,
  Fragment,
  ReactElement,
} from "react";

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} as const;

export type TwemojiAreaProps = {
  children: ReactNode;
  size?: Size;
  className?: string;
};

// Helper function to process text nodes and replace emojis
const processTextNode = (text: string, size: Size = "md"): ReactNode[] => {
  const container = document.createElement("div");
  container.textContent = text;
  twemoji.parse(container);

  // Convert the container's HTML content back to React elements
  const processed: ReactNode[] = [];
  container.childNodes.forEach((node, index) => {
    if (node.nodeType === Node.TEXT_NODE) {
      processed.push(node.textContent);
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      node instanceof HTMLImageElement
    ) {
      processed.push(
        <img
          key={`emoji-${index}`}
          src={node.src}
          alt={node.alt}
          className={cn("inline-block", sizeClasses[size])}
          style={{
            height: "1em",
            width: "1em",
            margin: "0 0.05em 0 0.1em",
            verticalAlign: "-0.1em",
          }}
        />
      );
    }
  });

  return processed;
};

interface ReactElementWithChildren extends ReactElement {
  props: {
    children?: ReactNode;
    [key: string]: any;
  };
}

// Recursive function to process React nodes
const processNode = (node: ReactNode, size: Size): ReactNode => {
  // Handle text nodes
  if (typeof node === "string") {
    return processTextNode(node, size);
  }

  // Handle arrays
  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <Fragment key={index}>{processNode(child, size)}</Fragment>
    ));
  }

  // Handle React elements
  if (isValidElement(node)) {
    const element = node as ReactElementWithChildren;
    const children = element.props.children
      ? Children.map(element.props.children, (child) =>
          processNode(child, size)
        )
      : element.props.children;

    return cloneElement(element, {
      ...element.props,
      children,
    });
  }

  // Return as is for other types (null, undefined, etc.)
  return node;
};

export const TwemojiArea: ReactFC<TwemojiAreaProps> = ({
  children,
  size = "md",
  className,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <ErrorBoundary
      fallback={<div className={className}>{children}</div>}
      onError={(error: Error) => {
        console.warn("TwemojiArea failed to render:", error);
      }}
    >
      <div className={className}>{processNode(children, size)}</div>
    </ErrorBoundary>
  );
};
