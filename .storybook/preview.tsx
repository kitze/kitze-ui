import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/styles/global.css";
import { cn } from "../src/cn";
import { KitzeUIProvider } from "../src/context/KitzeUIContext";

// Create a decorator that adds dark mode class and KitzeUI provider
const withProviders = (Story: any, context: any) => {
  const isDark = useDarkMode();

  return (
    <div
      className={cn("", {
        dark: isDark,
      })}
    >
      <KitzeUIProvider isMobile={context.globals.viewport === 'mobile'}>
        <Story />
      </KitzeUIProvider>
    </div>
  );
};

const preview: Preview = {
  decorators: [withProviders],
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
  globalTypes: {
    viewport: {
      name: 'Viewport',
      description: 'Device viewport for responsive design',
      defaultValue: 'desktop',
      toolbar: {
        icon: 'mobile',
        items: ['desktop', 'mobile'],
        title: 'Viewport',
      },
    },
  },
};

export default preview;
