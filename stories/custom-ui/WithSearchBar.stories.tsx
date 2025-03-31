import type { Meta, StoryObj } from "@storybook/react";
import { WithSearchBar } from "@/components/custom-ui/WithSearchBar";
import { useState } from "react";

const meta = {
  title: "Custom UI/WithSearchBar",
  component: WithSearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WithSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const WithSearchBarDemo = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-[600px] p-4 border rounded-lg">
      <WithSearchBar
        value={value}
        onChange={setValue}
        placeholder="Search items..."
      >
        <div className="flex items-center justify-between w-full">
          <h2 className="text-xl font-semibold">My Items</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">12 items</span>
          </div>
        </div>
      </WithSearchBar>
    </div>
  );
};

export const Default: Story = {
  render: () => <WithSearchBarDemo />,
};

export const WithCustomContent: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-[600px] p-4 border rounded-lg">
        <WithSearchBar
          value={value}
          onChange={setValue}
          placeholder="Search users..."
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full" />
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </div>
        </WithSearchBar>
      </div>
    );
  },
};
