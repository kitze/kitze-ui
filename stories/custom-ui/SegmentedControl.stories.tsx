import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  SegmentedControl,
  SegmentedControlProps,
} from "@/components/custom-ui/SegmentedControl";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";

type TabValue = "home" | "profile" | "settings";
type StoryProps = Omit<
  SegmentedControlProps<TabValue>,
  "value" | "onChange" | "options"
>;

const meta = {
  title: "Custom UI/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    layout: "centered",
  },
  args: {
    value: "home",
    options: [
      { value: "home", label: "Home", icon: <FiHome /> },
      { value: "profile", label: "Profile", icon: <FiUser /> },
      { value: "settings", label: "Settings", icon: <FiSettings /> },
    ],
  },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: "home" as const, label: "Home", icon: <FiHome /> },
  { value: "profile" as const, label: "Profile", icon: <FiUser /> },
  { value: "settings" as const, label: "Settings", icon: <FiSettings /> },
];

const Template = ({ variant, size }: StoryProps) => {
  const [value, setValue] = useState<TabValue>("home");

  return (
    <div className="w-[300px]">
      <SegmentedControl<TabValue>
        value={value}
        onChange={setValue}
        variant={variant}
        size={size}
        options={defaultOptions}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <Template />,
  args: {},
};

export const Variants: Story = {
  render: () => (
    <div className="v space-y-4">
      <Template variant="default" />
      <Template variant="outline" />
      <Template variant="ghost" />
    </div>
  ),
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="v space-y-4">
      <Template size="xs" />
      <Template size="sm" />
      <Template size="md" />
      <Template size="lg" />
      <Template size="xl" />
    </div>
  ),
  args: {},
};

export const VariantsAndSizes: Story = {
  render: () => (
    <div className="v space-y-8">
      {(["default", "outline", "ghost"] as const).map((variant) => (
        <div key={variant} className="v space-y-4">
          <h3 className="text-lg font-semibold capitalize">{variant}</h3>
          <div className="v space-y-4">
            {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
              <Template key={size} variant={variant} size={size} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {},
};
