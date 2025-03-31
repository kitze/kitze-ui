import type { Meta, StoryObj } from "@storybook/react";
import { CustomPopover } from "@/components/custom-ui";
import { Button } from "@/components/ui/Button/Button";

const meta = {
  title: "Custom UI/CustomPopover",
  component: CustomPopover,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomPopover>;

export default meta;
type Story = StoryObj<typeof CustomPopover>;

export const Default: Story = {
  args: {
    trigger: <Button>Click me</Button>,
    content: <div className="v-2">This is the popover content</div>,
  },
};

export const CustomAlignment: Story = {
  args: {
    trigger: <Button>Aligned Start</Button>,
    content: <div className="v-2">This popover is aligned to the start</div>,
    align: "start",
  },
};

export const CustomOffset: Story = {
  args: {
    trigger: <Button>More Offset</Button>,
    content: (
      <div className="v-2">This popover has more offset from the trigger</div>
    ),
    sideOffset: 8,
  },
};

export const CustomClasses: Story = {
  args: {
    trigger: <Button>Custom Classes</Button>,
    content: <div className="v-2">This popover has custom classes</div>,
    classNames: {
      content: "bg-zinc-900 text-white",
      trigger: "bg-blue-500 hover:bg-blue-600",
    },
  },
};
