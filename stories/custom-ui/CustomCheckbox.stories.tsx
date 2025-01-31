import type { Meta, StoryObj } from "@storybook/react";
import { CustomCheckbox } from "@/components/custom-ui/CustomCheckbox";

const meta: Meta<typeof CustomCheckbox> = {
  title: "Custom UI/CustomCheckbox",
  component: CustomCheckbox,
  tags: ["autodocs"],
  args: {
    label: "Accept terms and conditions",
    id: "terms",
  },
};

export default meta;
type Story = StoryObj<typeof CustomCheckbox>;

export const Default: Story = {
  args: {},
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomClassNames: Story = {
  args: {
    classNames: {
      root: "bg-gray-50 p-2 rounded",
      checkbox: "border-blue-500",
      label: "text-blue-600",
    },
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};
