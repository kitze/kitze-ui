import * as React from "react";
import { cn } from "../../cn";
import { ElementType, InputHTMLAttributes, ReactNode } from "react";

export interface InputClassNames {
  container?: string;
  input?: string;
  leftIcon?: string;
  rightIcon?: string;
  leftItem?: string;
  rightItem?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  iconClassName?: string;
  classNames?: InputClassNames;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      leftIcon,
      rightIcon,
      leftItem,
      rightItem,
      classNames = {},
      ...props
    },
    ref
  ) => {
    const hasLeft = leftIcon || leftItem;
    const hasRight = rightIcon || rightItem;

    const inputElement = (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-base",
          "transition-all duration-200 ease-in-out",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-muted-foreground",
          "focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "md:text-sm",
          hasLeft && "pl-1",
          hasRight && "pr-1",
          !hasLeft &&
            !hasRight &&
            "border border-input focus-visible:outline-none focus-visible:border-2 focus-visible:border-primary",
          !hasLeft && !hasRight && className,
          classNames.input
        )}
        ref={ref}
        {...props}
      />
    );

    if (!hasLeft && !hasRight) {
      return inputElement;
    }

    return (
      <div
        className={cn(
          "relative flex items-center rounded-md border border-input bg-background",
          "transition-all duration-200 ease-in-out",
          "focus-within:border-2 focus-within:border-primary",
          classNames.container,
          className
        )}
      >
        {hasLeft && (
          <div className="flex items-center pl-3">
            {leftIcon && (
              <div
                className={cn(
                  "size-4 text-muted-foreground transition-colors duration-200",
                  classNames.leftIcon
                )}
              >
                {React.createElement(leftIcon)}
              </div>
            )}
            {leftItem && (
              <div className={cn("text-foreground", classNames.leftItem)}>
                {leftItem}
              </div>
            )}
          </div>
        )}
        {inputElement}
        {hasRight && (
          <div className="flex items-center pr-3">
            {rightIcon && (
              <div
                className={cn(
                  "size-4 text-muted-foreground transition-colors duration-200",
                  classNames.rightIcon
                )}
              >
                {React.createElement(rightIcon)}
              </div>
            )}
            {rightItem && (
              <div className={cn("text-foreground", classNames.rightItem)}>
                {rightItem}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
