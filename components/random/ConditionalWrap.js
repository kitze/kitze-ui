export const ConditionalWrap = ({ condition, children, wrap, elseWrap }) => !!condition ? wrap(children) : elseWrap ? elseWrap(children) : children;
