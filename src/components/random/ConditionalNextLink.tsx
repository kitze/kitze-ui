import React from "react";
import { ReactFC } from "../../types";
import { cn } from "@/cn";

let Link: any;
(async () => {
  try {
    const nextLink = await import("next/link");
    Link = nextLink.default;
  } catch {
    Link = ({ href, children, ...props }: any) => (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
})();

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
