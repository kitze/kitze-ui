import {
  useEffect,
  useRef,
  Children,
  cloneElement,
  createElement,
  ReactNode,
} from "react";
import twemoji from "@twemoji/api";
import isEqual from "lodash.isequal";

export interface TwemojiReactProps {
  children?: ReactNode;
  noWrapper?: boolean;
  options?: object;
  tag?: string;
}

export const TwemojiReact = ({
  children,
  noWrapper = false,
  options = {},
  tag = "div",
  ...other
}: TwemojiReactProps) => {
  const rootRef = useRef<HTMLElement>(null);
  const childrenRefs = useRef<{ [key: string]: any }>({});
  const prevPropsRef = useRef<TwemojiReactProps | null>(null);

  const parseTwemoji = () => {
    if (noWrapper) {
      Object.values(childrenRefs.current).forEach((ref) => {
        if (ref.current) {
          twemoji.parse(ref.current, options);
        }
      });
    } else if (rootRef.current) {
      twemoji.parse(rootRef.current, options);
    }
  };

  useEffect(() => {
    const currentProps = { children, noWrapper, options, tag };
    if (!isEqual(currentProps, prevPropsRef.current)) {
      try {
        if (noWrapper) {
          Object.values(childrenRefs.current).forEach((ref) => {
            if (ref.current) {
              try {
                twemoji.parse(ref.current, options);
              } catch (err) {
                console.warn("Failed to parse individual twemoji:", err);
              }
            }
          });
        } else if (rootRef.current) {
          twemoji.parse(rootRef.current, options);
        }
        prevPropsRef.current = currentProps;
      } catch (error) {
        console.warn("Failed to parse twemoji:", error);
        // Let the error boundary handle the fallback
        throw error;
      }
    }
  }, [children, noWrapper, options, tag]);

  if (noWrapper) {
    return (
      <>
        {Children.map(children, (child, index) => {
          if (typeof child === "string") {
            console.warn(
              `Twemoji can't parse string child when noWrapper is set. Skipping child "${child}"`
            );
            return child;
          }
          if (!childrenRefs.current[index]) {
            childrenRefs.current[index] = useRef(null);
          }
          return cloneElement(child as any, {
            ref: childrenRefs.current[index],
          });
        })}
      </>
    );
  }

  const elementProps = { ...other, ref: rootRef };
  delete (elementProps as any).options;
  return createElement(tag, elementProps, children);
};
