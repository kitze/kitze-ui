import { IconType } from "react-icons";
import { Button, ButtonProps } from "../ui/Button";
import { cn } from "@/cn";
import { ReactFC } from "../../types";
import { Spinner } from "../ui/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import {
  useLinkableComponent,
  LinkableProps,
} from "../../hooks/useLinkableComponent";

export interface CustomButtonClassNames {
  root?: string;
  icon?: string;
  leftSide?: string;
  rightSide?: string;
}

export interface CustomButtonProps
  extends Omit<ButtonProps, "classNames" | "as">,
    LinkableProps {
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftSide?: ReactNode;
  rightSide?: ReactNode;
  loading?: boolean;
  classNames?: CustomButtonClassNames;
}

export const CustomButton: ReactFC<CustomButtonProps> = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftSide,
  rightSide,
  loading,
  children,
  className,
  classNames = {},
  href,
  external,
  disabled,
  ...props
}) => {
  const {
    Component,
    href: linkHref,
    linkProps,
  } = useLinkableComponent({
    href,
    external,
    ...props,
  });

  const showLoadingSpinner = loading && !leftSide;

  return (
    <Button
      href={linkHref}
      as={(Component || "button") as any}
      className={cn(
        "gap-1.5 transition-all duration-100 cursor-pointer relative",
        className
      )}
      disabled={disabled || loading}
      {...linkProps}
      {...props}
    >
      <AnimatePresence mode="wait">
        {/* Left side content */}
        {(leftSide || LeftIcon || showLoadingSpinner) && (
          <motion.div
            key={loading ? "spinner" : "left"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className={cn("flex items-center", classNames.leftSide)}
          >
            {showLoadingSpinner ? (
              <Spinner />
            ) : LeftIcon ? (
              <LeftIcon className={cn("w-4", classNames.icon)} />
            ) : (
              leftSide
            )}
          </motion.div>
        )}

        {/* Main content */}
        <motion.span
          animate={{
            opacity: loading ? 0.7 : 1,
            scale: loading ? 0.97 : 1,
          }}
          transition={{ duration: 0.1 }}
        >
          {children}
        </motion.span>

        {/* Right side content */}
        {(rightSide || RightIcon) && (
          <motion.div
            key="right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: loading ? 0.7 : 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className={cn("flex items-center", classNames.rightSide)}
          >
            {RightIcon ? (
              <RightIcon className={cn("w-4", classNames.icon)} />
            ) : (
              rightSide
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};
