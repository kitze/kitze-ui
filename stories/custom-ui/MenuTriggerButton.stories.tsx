import { Meta, StoryObj } from "@storybook/react";
import { MenuTriggerButton } from "@/components/custom-ui/MenuTriggerButton";

const meta = {
  title: "Custom UI/MenuTriggerButton",
  component: MenuTriggerButton,
  parameters: {
    layout: "centered",
  },
  args: {
    preventClick: true,
  },
} satisfies Meta<typeof MenuTriggerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icons: Story = {
  render: () => (
    <div className="horizontal space-x-4">
      <MenuTriggerButton icon="menu" />
      <MenuTriggerButton icon="dots-vertical" />
      <MenuTriggerButton icon="dots-horizontal" />
    </div>
  ),
};

export const WithTooltip: Story = {
  args: {
    tooltip: "Menu",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
