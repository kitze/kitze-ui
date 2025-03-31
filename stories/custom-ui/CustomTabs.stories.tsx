import type { Meta, StoryObj } from "@storybook/react";
import { CustomTabs } from "../../src/components/custom-ui/CustomTabs";
import { FiHome, FiUser, FiSettings, FiMail, FiHeart } from "react-icons/fi";
import { useState } from "react";

const meta = {
  title: "Custom UI/CustomTabs",
  component: CustomTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTabs = [
  { value: "home", label: "Home", icon: <FiHome /> },
  { value: "profile", label: "Profile", icon: <FiUser /> },
  { value: "settings", label: "Settings", icon: <FiSettings /> },
];

const Template = () => {
  const [value, setValue] = useState("home");

  return (
    <div className="w-[300px]">
      <CustomTabs value={value} onChange={setValue} tabs={defaultTabs} />
    </div>
  );
};

export const Default: Story = {
  args: {
    tabs: defaultTabs,
    value: "home",
  },
  render: () => <Template />,
};

export const Sizes: Story = {
  args: {
    tabs: defaultTabs,
    value: "home",
  },
  render: () => (
    <div className="flex flex-col gap-4">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <CustomTabs
          key={size}
          tabs={defaultTabs}
          size={size}
          value="home"
          onChange={console.log}
        />
      ))}
    </div>
  ),
};

export const WithoutIcons: Story = {
  render: () => (
    <CustomTabs
      tabs={[
        { value: "all", label: "All Items" },
        { value: "active", label: "Active" },
        { value: "completed", label: "Completed" },
      ]}
      value="all"
      onChange={console.log}
    />
  ),
};

export const WithManyTabs: Story = {
  render: () => (
    <div className="w-[600px]">
      <CustomTabs
        tabs={[
          { value: "home", label: "Home", icon: <FiHome /> },
          { value: "profile", label: "Profile", icon: <FiUser /> },
          { value: "settings", label: "Settings", icon: <FiSettings /> },
          { value: "messages", label: "Messages", icon: <FiMail /> },
          { value: "favorites", label: "Favorites", icon: <FiHeart /> },
        ]}
        value="home"
        onChange={console.log}
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <CustomTabs
      tabs={defaultTabs}
      value="home"
      onChange={console.log}
      disabled
    />
  ),
};

export const CustomStyles: Story = {
  render: () => (
    <CustomTabs
      tabs={defaultTabs}
      value="home"
      onChange={console.log}
      className="bg-blue-50 [&_[role=tab]]:text-blue-600 [&_[role=tab][data-state=active]]:bg-blue-100"
    />
  ),
};
