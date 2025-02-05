import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/Badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    color: "blue-500",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Badge",
    color: "red-500",
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Badge",
    color: "green-500",
    variant: "outline",
  },
};

export const Colors: Story = {
  render: () => (
    <div className="h space-x-2">
      <Badge color="blue-500">Blue</Badge>
      <Badge color="red-500">Red</Badge>
      <Badge color="green-500">Green</Badge>
      <Badge color="amber-500">Amber</Badge>
      <Badge color="purple-500">Purple</Badge>
      <Badge color="pink-500">Pink</Badge>
    </div>
  ),
};

export const DarkColors: Story = {
  render: () => (
    <div className="h space-x-2">
      <Badge color="blue-500" darkColor="blue-400">Blue</Badge>
      <Badge color="red-500" darkColor="red-400">Red</Badge>
      <Badge color="green-500" darkColor="green-400">Green</Badge>
      <Badge color="amber-500" darkColor="amber-400">Amber</Badge>
      <Badge color="purple-500" darkColor="purple-400">Purple</Badge>
      <Badge color="pink-500" darkColor="pink-400">Pink</Badge>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="v space-y-4">
      <div className="h space-x-2">
        <Badge color="blue-500" darkColor="blue-400" variant="default">Default</Badge>
        <Badge color="red-500" darkColor="red-400" variant="default">Default</Badge>
        <Badge color="green-500" darkColor="green-400" variant="default">Default</Badge>
      </div>
      <div className="h space-x-2">
        <Badge color="blue-500" darkColor="blue-400" variant="outline">Outline</Badge>
        <Badge color="red-500" darkColor="red-400" variant="outline">Outline</Badge>
        <Badge color="green-500" darkColor="green-400" variant="outline">Outline</Badge>
      </div>
      <div className="h space-x-2">
        <Badge color="blue-500" darkColor="blue-400" variant="ghost">Ghost</Badge>
        <Badge color="red-500" darkColor="red-400" variant="ghost">Ghost</Badge>
        <Badge color="green-500" darkColor="green-400" variant="ghost">Ghost</Badge>
      </div>
    </div>
  ),
};
