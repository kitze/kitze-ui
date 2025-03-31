import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "@/components/custom-ui/SearchBar";
import { useState } from "react";

const meta = {
  title: "Custom UI/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const SearchBarWithState = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-[300px]">
      <SearchBar
        value={value}
        onChange={setValue}
        placeholder="Search items..."
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <SearchBarWithState />,
};

export const WithCustomClassName: Story = {
  render: () => (
    <div className="w-[300px]">
      <SearchBar
        value=""
        onChange={() => {}}
        className="bg-gray-100"
        classNames={{
          input: "placeholder:text-gray-400",
          clearButton: "hover:bg-gray-200",
        }}
      />
    </div>
  ),
};

export const WithInitialValue: Story = {
  render: () => (
    <div className="w-[300px]">
      <SearchBar
        value="Initial search text"
        onChange={() => {}}
        placeholder="Search items..."
      />
    </div>
  ),
};
