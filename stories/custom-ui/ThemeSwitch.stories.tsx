import { Meta } from "@storybook/react";
import { useState } from "react";
import { ThemeSwitch } from "../../src/components/custom-ui/ThemeSwitch";

const meta = {
  title: "Custom UI/ThemeSwitch",
  component: ThemeSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitch>;

export default meta;

export const Interactive = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? "dark" : "light";

  return (
    <ThemeSwitch
      isDark={isDark}
      theme={theme}
      setTheme={(newTheme) => setIsDark(newTheme === "dark")}
      toggleTheme={() => setIsDark(!isDark)}
    />
  );
};
