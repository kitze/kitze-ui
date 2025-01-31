import React from "react";
import { ReactFC } from "../../types";

export const ConditionalWrap: ReactFC<{
  condition?: boolean;
  wrap: (c: React.ReactNode) => React.ReactElement;
  elseWrap?: (c: React.ReactNode) => React.ReactElement;
}> = ({ condition, children, wrap, elseWrap }) =>
  !!condition ? wrap(children) : elseWrap ? elseWrap(children) : children;
