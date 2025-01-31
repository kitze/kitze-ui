import type { Meta, StoryObj } from "@storybook/react";
import { ActionIcon } from "../../components/custom-ui/ActionIcon";
import { HiHeart, HiHome, HiCog, HiTrash, HiMail } from "react-icons/hi";

const meta = {
  title: "Custom UI/ActionIcon",
  component: ActionIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    Icon: {
      control: "select",
      options: ["HiHeart", "HiHome", "HiCog", "HiTrash", "HiMail"],
      mapping: {
        HiHeart,
        HiHome,
        HiCog,
        HiTrash,
        HiMail,
      },
    },
    iconSize: {
      control: { type: "number", min: 12, max: 48, step: 2 },
    },
    tooltip: {
      control: "text",
    },
    title: {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof ActionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Icon: HiHeart,
    iconSize: 20,
  },
};

export const WithTooltip: Story = {
  args: {
    Icon: HiMail,
    iconSize: 20,
    tooltip: "Send email",
  },
};

export const WithTitle: Story = {
  args: {
    Icon: HiCog,
    iconSize: 20,
    title: "Settings",
  },
};

export const LargeIcon: Story = {
  args: {
    Icon: HiHome,
    iconSize: 32,
  },
};

export const CustomStyles: Story = {
  args: {
    Icon: HiTrash,
    iconSize: 20,
    tooltip: "Delete item",
    classNames: {
      wrapper: "bg-red-100 hover:bg-red-200",
      icon: "text-red-600",
    },
  },
};

export const IconGrid: Story = {
  args: {
    Icon: HiHeart,
    iconSize: 20,
  },
  render: (args) => (
    <div className="flex gap-2 flex-wrap max-w-[300px]">
      {[HiHeart, HiHome, HiCog, HiTrash, HiMail].map((Icon, index) => (
        <ActionIcon
          key={index}
          Icon={Icon}
          tooltip={`Action ${index + 1}`}
          onClick={() => console.log(`Clicked icon ${index + 1}`)}
        />
      ))}
    </div>
  ),
};

export const InteractiveExample: Story = {
  args: {
    Icon: HiMail,
    iconSize: 20,
  },
  render: (args) => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <ActionIcon
          Icon={HiMail}
          tooltip="Send message"
          classNames={{
            root: "bg-blue-100 hover:bg-blue-200",
            icon: "text-blue-600",
          }}
        />
        <ActionIcon
          Icon={HiHeart}
          tooltip="Like"
          classNames={{
            root: "bg-pink-100 hover:bg-pink-200",
            icon: "text-pink-600",
          }}
        />
        <ActionIcon
          Icon={HiTrash}
          tooltip="Delete"
          classNames={{
            root: "bg-red-100 hover:bg-red-200",
            icon: "text-red-600",
          }}
        />
      </div>
      <span className="text-sm text-gray-500">
        Hover over icons to see tooltips
      </span>
    </div>
  ),
};

export const SizeVariants: Story = {
  args: {
    Icon: HiHome,
    iconSize: 20,
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <ActionIcon Icon={HiHome} iconSize={16} tooltip="Small" />
      <ActionIcon Icon={HiHome} iconSize={20} tooltip="Medium" />
      <ActionIcon Icon={HiHome} iconSize={24} tooltip="Large" />
      <ActionIcon Icon={HiHome} iconSize={32} tooltip="Extra Large" />
    </div>
  ),
};
