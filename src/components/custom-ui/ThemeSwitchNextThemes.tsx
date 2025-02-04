import { useTheme } from "next-themes";
import { useHotkeys } from "../../../../utils/src/hooks/useHotkeys";
import { ReactFC } from "@/types";
import { ThemeSwitch } from "./ThemeSwitch";

export interface ThemeSwitchNextThemesProps {
  className?: string;
}

export const ThemeSwitchNextThemes: ReactFC<ThemeSwitchNextThemesProps> = ({
  className,
}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  useHotkeys({
    x: () => {
      toggleTheme();
    },
  });

  return (
    <ThemeSwitch
      theme={theme || "light"}
      setTheme={setTheme}
      isDark={isDark}
      toggleTheme={toggleTheme}
      className={className}
    />
  );
};
