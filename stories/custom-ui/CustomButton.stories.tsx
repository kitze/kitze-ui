import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../../src/components/custom-ui/CustomButton";
import { HiArrowRight, HiMail, HiPlus, HiTrash } from "react-icons/hi";

const meta = {
  title: "Custom UI/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: "Create New",
    leftIcon: HiPlus,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Next Step",
    rightIcon: HiArrowRight,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Send Email",
    leftIcon: HiMail,
    rightIcon: HiArrowRight,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <CustomButton variant="default">Default Button</CustomButton>
      <CustomButton variant="destructive" leftIcon={HiTrash}>
        Delete Item
      </CustomButton>
      <CustomButton variant="outline" rightIcon={HiArrowRight}>
        Learn More
      </CustomButton>
      <CustomButton variant="secondary" leftIcon={HiMail}>
        Contact Us
      </CustomButton>
      <CustomButton variant="ghost" rightIcon={HiArrowRight}>
        Skip
      </CustomButton>
      <CustomButton variant="link">View Details</CustomButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <CustomButton size="sm" leftIcon={HiPlus}>
        Small
      </CustomButton>
      <CustomButton size="default" leftIcon={HiPlus}>
        Default
      </CustomButton>
      <CustomButton size="lg" leftIcon={HiPlus}>
        Large
      </CustomButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Cannot Click",
    leftIcon: HiMail,
    disabled: true,
  },
};

export const CustomStyles: Story = {
  args: {
    children: "Styled Button",
    leftIcon: HiPlus,
    classNames: {
      root: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
      icon: "text-white/80",
    },
  },
};
