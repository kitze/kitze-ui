import type { Meta, StoryObj } from "@storybook/react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../src/components/ui/Select"

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const SelectExample = (props: React.ComponentProps<typeof Select>) => (
  <Select {...props}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectItem value="grape" disabled>
        Grape
      </SelectItem>
    </SelectContent>
  </Select>
)

export const Default: Story = {
  args: {},
  render: (args: React.ComponentProps<typeof Select>) => <SelectExample {...args} />,
}

const LongListExample = (props: React.ComponentProps<typeof Select>) => (
  <Select {...props}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a country" />
    </SelectTrigger>
    <SelectContent>
      {Array.from({ length: 20 }, (_, i) => (
        <SelectItem key={i} value={`country-${i + 1}`}>
          Country {i + 1}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)

export const WithLongList: Story = {
  args: {},
  render: (args: React.ComponentProps<typeof Select>) => <LongListExample {...args} />,
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args: React.ComponentProps<typeof Select>) => <SelectExample {...args} />,
} 