import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Spinner,
  FullPageSpinner,
  SuspenseFullScreen,
  SuspenseFillHeight,
} from "@/components/ui/Spinner";

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Circle: Story = {
  args: {
    variant: "circle",
  },
};

export const Dots: Story = {
  args: {
    variant: "dots",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
};

export const FullPage: Story = {
  args: {
    size: "xl",
  },
  render: (args) => <FullPageSpinner {...args} />,
  parameters: {
    layout: "fullscreen",
  },
};

export const SuspenseFullScreenExample: Story = {
  render: () => (
    <SuspenseFullScreen>
      <div>Content inside suspense</div>
    </SuspenseFullScreen>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const SuspenseFullScreenLargeSpinner: Story = {
  render: () => (
    <SuspenseFullScreen size="lg">
      <div>Content inside suspense with large spinner</div>
    </SuspenseFullScreen>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const SuspenseFillHeightExample: Story = {
  render: () => (
    <div
      style={{
        height: "400px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
      }}
    >
      <div className="p-4 border-b">Header</div>
      <SuspenseFillHeight>
        <div>Content inside fill height suspense</div>
      </SuspenseFillHeight>
    </div>
  ),
};

export const SuspenseFillHeightCustomSpinner: Story = {
  render: () => (
    <div
      style={{
        height: "400px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
      }}
    >
      <div className="p-4 border-b">Header</div>
      <SuspenseFillHeight
        size="lg"
        variant="circle"
        wrapperClassName="bg-muted/10"
      >
        <div>Content inside fill height suspense with custom spinner</div>
      </SuspenseFillHeight>
    </div>
  ),
};
