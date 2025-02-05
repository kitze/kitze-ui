import type { Meta, StoryObj } from "@storybook/react";
import { CircleIcon } from "@/components/custom-ui";
import { TbBell, TbCheck, TbHeart, TbMessage, TbStar } from "react-icons/tb";

const meta = {
  title: "Custom UI/CircleIcon",
  component: CircleIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CircleIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Icon: TbBell,
    color: "blue-500",
    size: "md",
    variant: "default",
  },
};

export const Interactive: Story = {
  args: {
    Icon: TbBell,
    color: "blue-500",
    size: "md",
    variant: "outline",
    hoverable: true,
    clickable: true,
    onClick: () => alert('Clicked!'),
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="h space-x-4">
      <CircleIcon Icon={TbBell} color="blue-500" size="xs" />
      <CircleIcon Icon={TbBell} color="blue-500" size="sm" />
      <CircleIcon Icon={TbBell} color="blue-500" size="md" />
      <CircleIcon Icon={TbBell} color="blue-500" size="lg" />
      <CircleIcon Icon={TbBell} color="blue-500" size="xl" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="v space-y-4">
      <div className="h space-x-4">
        <CircleIcon Icon={TbBell} color="blue-500" size="md" variant="default" />
        <CircleIcon Icon={TbBell} color="blue-500" size="md" variant="outline" />
        <CircleIcon Icon={TbBell} color="blue-500" size="md" variant="ghost" />
      </div>
      <div className="h space-x-4">
        <CircleIcon Icon={TbBell} color="blue-500" size="md" variant="default" hoverable />
        <CircleIcon Icon={TbBell} color="blue-500" size="md" variant="outline" hoverable />
        <CircleIcon Icon={TbBell} color="blue-500" size="md" variant="ghost" hoverable />
      </div>
      <div className="h space-x-4">
        <CircleIcon Icon={TbBell} color="blue-500" size="md" variant="default" hoverable clickable />
        <CircleIcon Icon={TbBell} color="blue-500" size="md" variant="outline" hoverable clickable />
        <CircleIcon Icon={TbBell} color="blue-500" size="md" variant="ghost" hoverable clickable />
      </div>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div className="h space-x-4">
      <CircleIcon Icon={TbCheck} color="emerald-500" size="md" variant="default" hoverable clickable />
      <CircleIcon Icon={TbHeart} color="red-500" size="md" variant="outline" hoverable clickable />
      <CircleIcon Icon={TbStar} color="amber-500" size="md" variant="ghost" hoverable clickable />
      <CircleIcon Icon={TbMessage} color="indigo-500" size="md" variant="default" hoverable clickable />
    </div>
  ),
};

export const CustomClassName: Story = {
  args: {
    Icon: TbBell,
    color: "blue-500",
    size: "md",
    className: "hover:scale-110 transition-transform",
    iconClassName: "group-hover:rotate-12",
  },
};
