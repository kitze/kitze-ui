import type { Meta, StoryObj } from "@storybook/react";
import { Twemoji } from "@/components/custom-ui/Twemoji";

const meta = {
  title: "Custom UI/Twemoji",
  component: Twemoji,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Twemoji>;

export default meta;
type Story = StoryObj<typeof meta>;

// Single Emoji Stories
export const Default: Story = {
  args: {
    emoji: "👋",
    size: "md",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Twemoji size="xs">👋</Twemoji>
        <span className="text-sm text-gray-500">Extra Small</span>
      </div>
      <div className="flex items-center gap-4">
        <Twemoji size="sm">👋</Twemoji>
        <span className="text-sm text-gray-500">Small</span>
      </div>
      <div className="flex items-center gap-4">
        <Twemoji size="md">👋</Twemoji>
        <span className="text-sm text-gray-500">Medium</span>
      </div>
      <div className="flex items-center gap-4">
        <Twemoji size="lg">👋</Twemoji>
        <span className="text-sm text-gray-500">Large</span>
      </div>
      <div className="flex items-center gap-4">
        <Twemoji size="xl">👋</Twemoji>
        <span className="text-sm text-gray-500">Extra Large</span>
      </div>
    </div>
  ),
};

export const DifferentEmojis: Story = {
  render: () => (
    <div className="flex gap-4">
      <Twemoji>👋</Twemoji>
      <Twemoji>🚀</Twemoji>
      <Twemoji>💡</Twemoji>
      <Twemoji>🎨</Twemoji>
      <Twemoji>🎮</Twemoji>
      <Twemoji>🎯</Twemoji>
    </div>
  ),
};

export const ComplexEmojis: Story = {
  render: () => (
    <div className="flex gap-4">
      <Twemoji>👨‍👩‍👧‍👦</Twemoji>
      <Twemoji>👨‍💻</Twemoji>
      <Twemoji>🏃‍♂️</Twemoji>
      <Twemoji>👩‍🦰</Twemoji>
      <Twemoji>🧑‍🤝‍🧑</Twemoji>
    </div>
  ),
};
