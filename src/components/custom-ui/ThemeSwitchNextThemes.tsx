import { useTheme } from "next-themes";
import { ReactFC } from "@/types";
import { ThemeSwitch } from "./ThemeSwitch";
import { useMounted } from "../../hooks/useMounted";
import {
  ThemeSwitchMinimal,
  ThemeSwitchMinimalProps,
} from "./ThemeSwitchMinimal";

export interface ThemeSwitchNextThemesProps {
  className?: string;
}

export const ThemeSwitchNextThemes: ReactFC<ThemeSwitchNextThemesProps> = ({
  className,
}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }

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

export const ThemeSwitchNextThemesMinimal: ReactFC<
  Omit<ThemeSwitchMinimalProps, "theme" | "setTheme">
> = (props) => {
  const mounted = useMounted();
  const { theme = "light", setTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  return <ThemeSwitchMinimal theme={theme} setTheme={setTheme} {...props} />;
};
