import type { Meta, StoryObj } from "@storybook/react"
import { CustomSelect } from "../../src/components/custom-ui/CustomSelect"
import { useState } from "react"

const meta = {
  title: "Custom UI/CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomSelect>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape", disabled: true },
]

const ControlledExample = () => {
  const [value, setValue] = useState<string>()
  return (
    <CustomSelect
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select a fruit"
    />
  )
}

export const Default: Story = {
  args: {
    options,
    placeholder: "Select a fruit",
  },
  render: (args) => <ControlledExample />,
}

export const WithCustomStyles: Story = {
  args: {
    options,
    placeholder: "Select a fruit",
    classNames: {
      trigger: "bg-blue-50 border-blue-200",
      content: "bg-blue-50",
      item: "hover:bg-blue-100",
      nativeSelect: "bg-blue-50 border-blue-200",
    },
  },
  render: (args) => <CustomSelect {...args} />,
}

export const Disabled: Story = {
  args: {
    options,
    placeholder: "Select a fruit",
    disabled: true,
  },
  render: (args) => <CustomSelect {...args} />,
}

export const WithLongList: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `country-${i + 1}`,
      label: `Country ${i + 1}`,
    })),
    placeholder: "Select a country",
  },
  render: (args) => <CustomSelect {...args} />,
}

export const NativeMobile: Story = {
  args: {
    options,
    placeholder: "Select a fruit",
    nativeOnMobile: true,
  },
  render: (args) => <CustomSelect {...args} />,
}

export const ForceRadix: Story = {
  args: {
    options,
    placeholder: "Select a fruit",
    nativeOnMobile: false,
  },
  render: (args) => <CustomSelect {...args} />,
} 