import { cn } from "@/cn";
import { ElementType, forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { Input } from "../ui/Input";
import React from "react";

export type CustomInputProps = {
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  leftItem?: ReactNode;
  rightItem?: ReactNode;
  iconClassName?: string;
  classNames?: {
    container?: string;
    input?: string;
    leftIcon?: string;
    rightIcon?: string;
    leftItem?: string;
    rightItem?: string;
  };
} & InputHTMLAttributes<HTMLInputElement>;

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      leftIcon,
      rightIcon,
      leftItem,
      rightItem,
      className,
      classNames = {},
      ...rest
    },
    ref
  ) => {
    const hasLeft = leftIcon || leftItem;
    const hasRight = rightIcon || rightItem;

    return (
      <div
        className={cn(
          "relative flex items-center rounded-md border border-input bg-background transition-all duration-200 ease-in-out focus-within:border-input focus-within:ring-1 focus-within:ring-ring",
          classNames.container
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
        <Input
          className={cn(
            "border-0 shadow-none ring-0 focus-visible:ring-0",
            hasLeft && "pl-1",
            hasRight && "pr-1",
            classNames.input,
            className
          )}
          ref={ref}
          {...rest}
        />
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

CustomInput.displayName = "CustomInput";
