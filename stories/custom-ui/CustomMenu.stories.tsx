import type { Meta, StoryObj } from "@storybook/react";
import { CustomMenu, CustomMenuItem } from "@/components/custom-ui/CustomMenu";
import { Button } from "@/components/ui/Button/Button";

const meta = {
  title: "Custom UI/CustomMenu",
  component: CustomMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <CustomMenu trigger={<Button>Custom Menu</Button>}>
      <CustomMenuItem onClick={() => console.log("Profile clicked")}>
        Profile
      </CustomMenuItem>
      <CustomMenuItem onClick={() => console.log("Settings clicked")}>
        Settings
      </CustomMenuItem>
      <CustomMenuItem disabled>Disabled Item</CustomMenuItem>
      <CustomMenuItem onClick={() => console.log("Sign out clicked")}>
        Sign out
      </CustomMenuItem>
    </CustomMenu>
  ),
};
