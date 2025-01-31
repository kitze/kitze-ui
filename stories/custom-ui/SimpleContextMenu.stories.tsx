import type { Meta, StoryObj } from "@storybook/react";

import { SimpleContextMenu } from "../../src/components/custom-ui/ContextMenu/SimpleContextMenu";
import { CustomButton } from "../../src/components/custom-ui/CustomButton";
import { ContextCustomMenuItemDelete } from "../../src/components/custom-ui/ContextMenu/ContextCustomMenuItemDelete";
import { ContextCustomMenuItem } from "../../src/components/custom-ui/ContextMenu/ContextCustomMenuItem";

import { HiPencil, HiDuplicate, HiShare, HiCheck } from "react-icons/hi";
import { ContextCustomMenuItemEdit } from "../../src/components/custom-ui/ContextMenu/ContextCustomMenuItemEdit";

const meta = {
  title: "Custom UI/SimpleContextMenu",
  component: SimpleContextMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SimpleContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultMenuContent = () => (
  <div className="min-w-[160px]">
    <ContextCustomMenuItemEdit onClick={() => console.log("Edit clicked")} />
    <ContextCustomMenuItem
      Icon={HiDuplicate}
      onClick={() => console.log("Duplicate clicked")}
    >
      Duplicate
    </ContextCustomMenuItem>
    <ContextCustomMenuItemDelete
      onClick={() => console.log("Delete clicked")}
    />
  </div>
);

export const Default: Story = {
  args: {
    children: <CustomButton>Right Click Me</CustomButton>,
    content: <DefaultMenuContent />,
  },
};

export const CustomTrigger: Story = {
  args: {
    children: (
      <div className="w-32 h-32 bg-gray-100 flex items-center justify-center rounded-lg cursor-context-menu">
        Right click here
      </div>
    ),
    content: <DefaultMenuContent />,
  },
};

export const WithHints: Story = {
  render: (args) => (
    <SimpleContextMenu {...args}>{args.children}</SimpleContextMenu>
  ),
  args: {
    children: <CustomButton>Menu with Hints</CustomButton>,
    content: (
      <div className="min-w-[180px]">
        <ContextCustomMenuItemEdit
          hint="Edit item details"
          onClick={() => console.log("Edit clicked")}
        />
        <ContextCustomMenuItem
          Icon={HiDuplicate}
          hint="Create a copy"
          onClick={() => console.log("Duplicate clicked")}
        >
          Duplicate
        </ContextCustomMenuItem>
        <ContextCustomMenuItemDelete
          hint="Permanently delete item"
          onClick={() => console.log("Delete clicked")}
        />
      </div>
    ),
  },
};

export const ComplexMenu: Story = {
  args: {
    children: <CustomButton>Advanced Menu</CustomButton>,
    content: (
      <div className="min-w-[200px]">
        <div className="px-2 py-1.5 text-sm text-gray-500 font-medium">
          Actions
        </div>
        <ContextCustomMenuItem
          Icon={HiShare}
          onClick={() => console.log("Share clicked")}
        >
          Share
        </ContextCustomMenuItem>
        <ContextCustomMenuItem
          Icon={HiCheck}
          onClick={() => console.log("Approve clicked")}
          classNames={{
            icon: "text-green-500",
            content: "text-green-700",
          }}
        >
          Approve
        </ContextCustomMenuItem>
        <div className="h-px bg-gray-200 my-1" />
        <ContextCustomMenuItemDelete
          onClick={() => console.log("Delete clicked")}
        >
          Remove
        </ContextCustomMenuItemDelete>
      </div>
    ),
  },
};

export const CustomLabels: Story = {
  args: {
    children: <CustomButton>Custom Labels</CustomButton>,
    content: (
      <div className="min-w-[160px]">
        <ContextCustomMenuItemEdit onClick={() => console.log("Edit clicked")}>
          Modify
        </ContextCustomMenuItemEdit>
        <ContextCustomMenuItem
          Icon={HiDuplicate}
          onClick={() => console.log("Duplicate clicked")}
        >
          Duplicate
        </ContextCustomMenuItem>
        <ContextCustomMenuItemDelete
          onClick={() => console.log("Delete clicked")}
        >
          Remove Item
        </ContextCustomMenuItemDelete>
      </div>
    ),
  },
};

export const MultipleTargets: Story = {
  args: {
    children: <CustomButton>Default Button</CustomButton>,
    content: <DefaultMenuContent />,
  },
  render: (args) => (
    <div className="flex gap-4">
      <SimpleContextMenu content={args.content}>
        <CustomButton variant="default">Menu 1</CustomButton>
      </SimpleContextMenu>
      <SimpleContextMenu content={args.content}>
        <CustomButton variant="outline">Menu 2</CustomButton>
      </SimpleContextMenu>
      <SimpleContextMenu content={args.content}>
        <CustomButton variant="secondary">Menu 3</CustomButton>
      </SimpleContextMenu>
    </div>
  ),
};
