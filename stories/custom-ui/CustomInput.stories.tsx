import { Meta, StoryObj } from "@storybook/react";
import { CustomInput } from "../../src/components/custom-ui/CustomInput";
import { FiMail, FiLock, FiSearch, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const meta = {
  title: "Custom UI/CustomInput",
  component: CustomInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Enter email...",
    leftIcon: <FiMail />,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "Enter password...",
    rightIcon: <FiLock />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "Search...",
    leftIcon: <FiSearch />,
    rightIcon: <FiMail />,
  },
};

export const WithCustomItem: Story = {
  args: {
    placeholder: "Amount...",
    leftItem: <span className="text-sm font-medium">$</span>,
    rightItem: <span className="text-sm text-muted-foreground">USD</span>,
  },
};

export const WithPasswordToggle: Story = {
  render: (args) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <CustomInput
        type={showPassword ? "text" : "password"}
        placeholder="Enter password..."
        leftIcon={<FiLock />}
        rightIcon={
          showPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword(false)}
              className="cursor-pointer hover:text-foreground"
            >
              <FiEyeOff />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowPassword(true)}
              className="cursor-pointer hover:text-foreground"
            >
              <FiEye />
            </button>
          )
        }
        {...args}
      />
    );
  },
};

export const WithCustomColors: Story = {
  args: {
    placeholder: "Custom styling...",
    leftIcon: <FiMail />,
    classNames: {
      container: "border-purple-500 focus-within:border-purple-600 focus-within:ring-purple-500/20",
      leftIcon: "text-purple-500",
    },
  },
};
