import React from "react";
import { ReactFC } from "../../types";
import { cn } from "@/cn";

export interface ConditionalAnchorClassNames {
  anchor?: string;
}

export interface ConditionalAnchorProps {
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  classNames?: ConditionalAnchorClassNames;
}

export const ConditionalAnchor: ReactFC<ConditionalAnchorProps> = ({
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  children,
  className,
  classNames = {},
}) => {
  if (!href) {
    return <>{children}</>;
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(className, classNames.anchor)}
    >
      {children}
    </a>
  );
};
