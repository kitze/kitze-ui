import { IconType } from "react-icons";
import { cn } from "@/cn";
import { ReactFC } from "../../types";
import { ConditionalTooltip } from "./ConditionalTooltip";
import { Button, ButtonProps } from "../ui/Button";
import { Spinner } from "../ui/Spinner";
import { motion, AnimatePresence } from "framer-motion";

export interface ActionIconClassNames {
  root?: string;
  icon?: string;
  tooltip?: string;
}

export interface ActionIconProps
  extends Omit<ButtonProps, "classNames" | "size"> {
  Icon: IconType;
  tooltip?: string;
  iconSize?: number;
  loading?: boolean;
  classNames?: ActionIconClassNames;
}

export const ActionIcon: ReactFC<ActionIconProps> = ({
  Icon,
  onClick,
  title,
  tooltip,
  iconSize = 16,
  loading,
  classNames = {},
  variant = "secondary",
  disabled,
  ...props
}) => {
  const button = (
    <Button
      onClick={onClick}
      title={title}
      variant={variant}
      disabled={disabled || loading}
      className={cn(
        "cursor-pointer px-2.5 rounded-lg flex items-center justify-center transition-all relative",
        classNames.root
      )}
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={loading ? "spinner" : "icon"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
          className="flex items-center justify-center"
        >
          {loading ? (
            <Spinner size="sm" />
          ) : (
            <Icon size={iconSize} className={cn(classNames.icon)} />
          )}
        </motion.div>
      </AnimatePresence>
    </Button>
  );

  return (
    <ConditionalTooltip
      condition={!!tooltip}
      content={tooltip}
      classNames={{
        tooltip: classNames.tooltip,
      }}
    >
      {button}
    </ConditionalTooltip>
  );
};
