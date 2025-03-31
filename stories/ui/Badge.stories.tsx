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
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    color: "primary",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Badge color="primary" variant="default">
        Default
      </Badge>
      <Badge color="primary" variant="outline">
        Outline
      </Badge>
      <Badge color="primary" variant="ghost">
        Ghost
      </Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge color="primary" size="xs">
        Extra Small
      </Badge>
      <Badge color="primary" size="sm">
        Small
      </Badge>
      <Badge color="primary" size="md">
        Medium
      </Badge>
      <Badge color="primary" size="lg">
        Large
      </Badge>
      <Badge color="primary" size="xl">
        Extra Large
      </Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="info">Info</Badge>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Badge color="violet">Violet</Badge>
      <Badge color="amber">Amber</Badge>
      <Badge color="emerald">Emerald</Badge>
    </div>
  ),
};

export const WithDarkColors: Story = {
  render: () => (
    <div className="flex gap-4">
      <Badge color="primary" darkColor="secondary">
        Different Dark Color
      </Badge>
      <Badge color="success" darkColor="info">
        Custom Dark Theme
      </Badge>
    </div>
  ),
};
