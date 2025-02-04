import { Meta, StoryObj } from "@storybook/react";
import { CustomMenuItem } from "@/components/custom-ui/CustomMenu/CustomMenuItem";
import {
  CustomMenuItemDelete,
  CustomMenuItemEdit,
} from "@/components/custom-ui/CustomMenu/CustomMenuItemVariants";
import { LuExternalLink } from "react-icons/lu";

const meta = {
  title: "Custom UI/Menu Items",
  component: CustomMenuItem,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <CustomMenuItem>Basic Menu Item</CustomMenuItem>
      <CustomMenuItem icon={LuExternalLink}>With Icon</CustomMenuItem>
      <CustomMenuItem disabled>Disabled Menu Item</CustomMenuItem>
      <CustomMenuItemEdit />
      <CustomMenuItemEdit>Custom Edit Text</CustomMenuItemEdit>
      <CustomMenuItemDelete />
      <CustomMenuItemDelete>Custom Delete Text</CustomMenuItemDelete>
    </div>
  ),
};
