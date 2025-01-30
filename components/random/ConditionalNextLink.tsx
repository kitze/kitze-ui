import React from "react";
import { ReactFC } from "../../types";
import { cn } from "../../cn";
import Link from "next/link";

export interface ConditionalNextLinkClassNames {
  link?: string;
}

export interface ConditionalNextLinkProps {
  href?: string;
  className?: string;
  classNames?: ConditionalNextLinkClassNames;
  prefetch?: boolean;
}

export const ConditionalNextLink: ReactFC<ConditionalNextLinkProps> = ({
  href,
  children,
  className,
  classNames = {},
  prefetch,
}) => {
  if (!href) {
    return <>{children}</>;
  }

  return (
    <Link
      href={href}
      className={cn(className, classNames.link)}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
};
