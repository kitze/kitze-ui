import { useTheme } from "next-themes";
import { ReactFC } from "@/types";
import { CustomButton, CustomButtonProps } from "./CustomButton";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiDesktopComputer } from "react-icons/hi";
import { cn } from "@/cn";

export interface ThemeSwitchMinimalClassNames {
  button?: string;
  icon?: string;
}

export interface ThemeSwitchMinimalProps extends Omit<CustomButtonProps, "classNames"> {
  classNames?: ThemeSwitchMinimalClassNames;
  buttonProps?: Partial<CustomButtonProps>;
}

export const ThemeSwitchMinimal: ReactFC<ThemeSwitchMinimalProps> = ({
  className,
  classNames = {},
  buttonProps,
  ...rest
}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const isSystem = theme === "system";

  return (
    <CustomButton
      className={cn(
        "relative h-9 w-9 p-0",
        className,
        classNames.button
      )}
      onClick={() => {
        setTheme(isDark ? "light" : isSystem ? "dark" : "system");
      }}
      {...buttonProps}
      {...rest}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, y: 10, rotate: -30 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -10, rotate: 30 }}
            transition={{ duration: 0.2 }}
          >
            <HiMoon className={cn("size-4", classNames.icon)} />
          </motion.div>
        ) : isSystem ? (
          <motion.div
            key="system"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.2 }}
          >
            <HiDesktopComputer className={cn("size-4", classNames.icon)} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, y: -10, rotate: -30 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 10, rotate: 30 }}
            transition={{ duration: 0.2 }}
          >
            <HiSun className={cn("size-4", classNames.icon)} />
          </motion.div>
        )}
      </AnimatePresence>
    </CustomButton>
  );
};
