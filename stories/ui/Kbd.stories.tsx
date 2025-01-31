import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "../../components/custom-ui/Kbd";

const meta = {
  title: "Custom UI/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleKey: Story = {
  args: {
    keys: ["A"],
  },
};

export const Combination: Story = {
  args: {
    keys: ["⌘", "K"],
  },
};

export const ComplexCombination: Story = {
  args: {
    keys: ["Shift", "⌘", "K"],
  },
};

export const WithModifiers: Story = {
  args: {
    keys: ["Ctrl", "Alt", "Del"],
  },
};

export const FunctionKeys: Story = {
  args: {
    keys: ["F11"],
  },
};

export const CustomStyles: Story = {
  args: {
    keys: ["⌘", "S"],
    classNames: {
      root: "bg-blue-50",
      key: "bg-blue-100 border-blue-200 text-blue-700",
      separator: "text-blue-400",
    },
  },
};

export const CommonShortcuts: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span>Save:</span>
        <Kbd keys={["⌘", "S"]} />
      </div>
      <div className="flex items-center gap-2">
        <span>Find:</span>
        <Kbd keys={["⌘", "F"]} />
      </div>
      <div className="flex items-center gap-2">
        <span>Cut:</span>
        <Kbd keys={["⌘", "X"]} />
      </div>
      <div className="flex items-center gap-2">
        <span>Copy:</span>
        <Kbd keys={["⌘", "C"]} />
      </div>
      <div className="flex items-center gap-2">
        <span>Paste:</span>
        <Kbd keys={["⌘", "V"]} />
      </div>
    </div>
  ),
};

export const WindowsShortcuts: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span>Task Manager:</span>
        <Kbd keys={["Ctrl", "Shift", "Esc"]} />
      </div>
      <div className="flex items-center gap-2">
        <span>Lock Screen:</span>
        <Kbd keys={["Win", "L"]} />
      </div>
      <div className="flex items-center gap-2">
        <span>Screenshot:</span>
        <Kbd keys={["Win", "PrtSc"]} />
      </div>
    </div>
  ),
};
