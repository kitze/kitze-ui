import { ReactFC } from "@/types";
import { VaulMenuItem, VaulMenuItemProps } from "./VaulMenuItem";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useMemo } from "react";

export type Theme = "light" | "dark" | "system";

export interface VaulMenuItemThemeSwitcherProps
  extends Omit<VaulMenuItemProps, "icon" | "title" | "onClick"> {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const VaulMenuItemThemeSwitcher: ReactFC<
  VaulMenuItemThemeSwitcherProps
> = ({ theme, setTheme, ...props }) => {
  const { icon: Icon, title } = useMemo(() => {
    switch (theme) {
      case "light":
        return { icon: FiSun, title: "Light" };
      case "dark":
        return { icon: FiMoon, title: "Dark" };
      default:
        return { icon: FiMonitor, title: "System" };
    }
  }, [theme]);

  const handleClick = () => {
    const themes: Theme[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <VaulMenuItem
      {...props}
      closeOnClick={false}
      icon={Icon}
      title={`Theme: ${title}`}
      onClick={handleClick}
    />
  );
};
