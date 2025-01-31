import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedControl } from "../../components/custom-ui/SegmentedControl";
import { HiHome, HiUser, HiCog, HiHeart, HiMail } from "react-icons/hi";

const meta = {
  title: "Custom UI/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "all",
    onChange: (value) => console.log(value),
    options: [
      { value: "all", label: "All" },
      { value: "active", label: "Active" },
      { value: "completed", label: "Completed" },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    value: "home",
    options: [
      { value: "home", label: "Home", icon: <HiHome className="h-4 w-4" /> },
      {
        value: "profile",
        label: "Profile",
        icon: <HiUser className="h-4 w-4" />,
      },
      {
        value: "settings",
        label: "Settings",
        icon: <HiCog className="h-4 w-4" />,
      },
    ],
  },
};

export const IconsOnly: Story = {
  args: {
    value: "home",
    options: [
      { value: "home", label: "", icon: <HiHome className="h-4 w-4" /> },
      { value: "heart", label: "", icon: <HiHeart className="h-4 w-4" /> },
      { value: "mail", label: "", icon: <HiMail className="h-4 w-4" /> },
    ],
  },
};

export const CustomStyles: Story = {
  args: {
    value: "daily",
    className: "bg-blue-100",
    options: [
      { value: "daily", label: "Daily" },
      { value: "weekly", label: "Weekly" },
      { value: "monthly", label: "Monthly" },
    ],
  },
};

export const Interactive: Story = {
  args: {
    value: "grid",
    onChange: (value) => console.log(value),
    options: [],
  },
  render: () => {
    const options = [
      {
        value: "grid",
        label: "Grid View",
        icon: <HiHome className="h-4 w-4" />,
      },
      {
        value: "list",
        label: "List View",
        icon: <HiUser className="h-4 w-4" />,
      },
      {
        value: "table",
        label: "Table View",
        icon: <HiCog className="h-4 w-4" />,
      },
    ];

    return (
      <div className="flex flex-col gap-4 items-center">
        <SegmentedControl
          value="grid"
          options={options}
          onChange={(value) => console.log(`Selected: ${value}`)}
        />
        <p className="text-sm text-gray-500">Click to change view</p>
      </div>
    );
  },
};

export const Sizes: Story = {
  args: {
    value: "s",
    onChange: (value) => console.log(value),
    options: [],
  },
  render: () => {
    const options = [
      { value: "s", label: "Small" },
      { value: "m", label: "Medium" },
      { value: "l", label: "Large" },
    ];

    return (
      <div className="flex flex-col gap-4">
        <SegmentedControl
          value="s"
          onChange={(value) => console.log(value)}
          options={options}
          className="h-6 text-[11px]"
        />
        <SegmentedControl value="m" options={options} />
        <SegmentedControl
          value="l"
          options={options}
          className="h-10 text-sm"
        />
      </div>
    );
  },
};

export const LongLabels: Story = {
  args: {
    value: "upcoming",
    options: [
      { value: "upcoming", label: "Upcoming Events" },
      { value: "inprogress", label: "In Progress" },
      { value: "completed", label: "Completed Events" },
    ],
    className: "max-w-md",
  },
};
