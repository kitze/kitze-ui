import type { Meta, StoryObj } from "@storybook/react";
import { HelpTooltipIcon } from "../../src/components/custom-ui/HelpTooltipIcon";

const meta = {
  title: "Custom UI/HelpTooltipIcon",
  component: HelpTooltipIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number", min: 8, max: 48, step: 2 },
    },
    tooltip: {
      control: "text",
    },
  },
} satisfies Meta<typeof HelpTooltipIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tooltip: "This is a helpful tooltip",
  },
};

export const LargeIcon: Story = {
  args: {
    tooltip: "Larger question mark icon",
    size: 24,
  },
};

export const CustomStyle: Story = {
  args: {
    tooltip: "Custom styled tooltip icon",
    classNames: {
      icon: "text-blue-500 opacity-100 hover:text-blue-600",
    },
  },
};

export const InContext: Story = {
  args: {
    tooltip: "Click here to learn more about this feature",
  },
  render: () => (
    <div className="flex items-center gap-2 p-4 border rounded">
      <span>Need help?</span>
      <HelpTooltipIcon tooltip="Click here to learn more about this feature" />
    </div>
  ),
};

export const MultipleExamples: Story = {
  args: {
    tooltip: "Configure the basic parameters",
  },
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span>Basic setting</span>
        <HelpTooltipIcon tooltip="Configure the basic parameters" />
      </div>
      <div className="flex items-center gap-2">
        <span>Advanced options</span>
        <HelpTooltipIcon
          tooltip="These settings are for advanced users"
          size={16}
          classNames={{ icon: "text-amber-500 opacity-75" }}
        />
      </div>
      <div className="flex items-center gap-2">
        <span>Danger zone</span>
        <HelpTooltipIcon
          tooltip="These actions cannot be undone"
          size={18}
          classNames={{ icon: "text-red-500 opacity-75" }}
        />
      </div>
    </div>
  ),
};
