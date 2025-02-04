import { useTheme } from "next-themes";
import { ReactFC } from "@/types";
import { VaulMenuItemThemeSwitcher, VaulMenuItemThemeSwitcherProps } from "./VaulMenuItemThemeSwitcher";
import { Theme } from "./VaulMenuItemThemeSwitcher";

export type VaulMenuItemThemeSwitcherNextThemesProps = Omit<VaulMenuItemThemeSwitcherProps, "theme" | "setTheme">;

export const VaulMenuItemThemeSwitcherNextThemes: ReactFC<VaulMenuItemThemeSwitcherNextThemesProps> = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <VaulMenuItemThemeSwitcher
      {...props}
      theme={(theme as Theme) || "system"}
      setTheme={(newTheme) => setTheme(newTheme)}
    />
  );
};
