import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/styles/global.css";
import { cn } from "../src/cn";

// Create a decorator that adds dark mode class
const withThemeProvider = (Story: any) => {
  const isDark = useDarkMode();

  return (
    <div
      className={cn("", {
        dark: isDark,
      })}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    darkMode: {
      dark: { ...themes.dark },
      light: { ...themes.normal },
      current: "light",
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
