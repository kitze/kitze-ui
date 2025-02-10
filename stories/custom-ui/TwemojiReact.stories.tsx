import type { Meta, StoryObj } from "@storybook/react";
import { TwemojiReact } from "../../src/components/custom-ui/TwemojiReact";

const meta = {
  title: "Custom UI/TwemojiReact",
  component: TwemojiReact,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TwemojiReact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleEmoji: Story = {
  args: {
    children: "👋",
  },
};

export const MultipleEmojisWithWrapper: Story = {
  args: {
    children: (
      <div className="space-y-4">
        <div>Hello 👋 World 🌍!</div>
        <div>I love coding 👨‍💻 and coffee ☕</div>
        <div>React is awesome 💙</div>
      </div>
    ),
  },
};

export const MultipleEmojisNoWrapper: Story = {
  args: {
    noWrapper: true,
    children: (
      <>
        <div className="space-y-4">
          <div>Hello 👋 World 🌍!</div>
          <div>I love coding 👨‍💻 and coffee ☕</div>
          <div>React is awesome 💙</div>
        </div>
      </>
    ),
  },
};

export const CustomOptions: Story = {
  args: {
    children: "🎨",
    options: {
      folder: "svg",
      ext: ".svg",
    },
  },
};
