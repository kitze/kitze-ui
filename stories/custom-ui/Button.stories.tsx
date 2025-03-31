import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../src/components/ui/Button/Button";
import React from "react";
import {
  LuSearch,
  LuArrowRight,
  LuPlus,
  LuTrash,
  LuPencil as LuEdit,
  LuMail,
  LuDownload,
  LuSettings,
} from "react-icons/lu";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    color: "primary",
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button leftIcon={LuMail}>Send Email</Button>
        <Button rightIcon={LuArrowRight}>Next Step</Button>
        <Button leftIcon={LuDownload} rightIcon={LuArrowRight}>
          Download & Continue
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="outline" leftIcon={LuSettings}>
          Settings
        </Button>
        <Button variant="ghost" rightIcon={LuArrowRight}>
          View More
        </Button>
      </div>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button icon={LuPlus} tooltip="Add Item" />
      <Button
        icon={LuTrash}
        variant="outline"
        color="destructive"
        tooltip="Delete"
      />
      <Button icon={LuEdit} variant="ghost" tooltip="Edit" />
    </div>
  ),
};

export const CircleButtons: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button circle>A</Button>
      <Button circle icon={LuPlus} />
      <Button circle variant="outline">
        B
      </Button>
      <Button circle variant="ghost" icon={LuEdit} />
    </div>
  ),
};

export const Showcase: Story = {
  render: () => {
    const variants = ["default", "outline", "ghost"] as const;
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
    const colors = [
      "primary",
      "secondary",
      "destructive",
      "blue-500",
      "green-500",
      "yellow-500",
      "purple-500",
      "pink-500",
    ] as const;

    return (
      <div className="w-full max-w-[1400px] p-4 flex flex-col gap-8">
        {/* Regular Buttons */}
        <div className="grid grid-cols-8 gap-2">
          {colors.map((color) =>
            variants.map((variant) =>
              sizes.map((size) => (
                <Button
                  key={`${color}-${variant}-${size}`}
                  variant={variant}
                  size={size}
                  color={color}
                >
                  {size}
                </Button>
              ))
            )
          )}
        </div>

        {/* Icon Buttons */}
        <div className="grid grid-cols-8 gap-2">
          {colors.map((color) =>
            variants.map((variant) =>
              sizes.map((size) => (
                <Button
                  key={`icon-${color}-${variant}-${size}`}
                  variant={variant}
                  size={size}
                  color={color}
                  icon={LuPlus}
                />
              ))
            )
          )}
        </div>

        {/* Circle Buttons */}
        <div className="grid grid-cols-8 gap-2">
          {colors.map((color) =>
            variants.map((variant) => (
              <React.Fragment key={`circle-${color}-${variant}`}>
                <Button color={color} variant={variant} circle>
                  A
                </Button>
                <Button color={color} variant={variant} circle icon={LuPlus} />
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    );
  },
};

export const WithCustomSide: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button leftSide={<div className="w-6 h-6 rounded-full bg-blue-500" />}>
        With Avatar
      </Button>
      <Button
        rightSide={
          <span className="px-2 py-1 rounded bg-green-500 text-xs">New</span>
        }
      >
        With Badge
      </Button>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button loading>Loading...</Button>
        <Button loading variant="outline">
          Processing
        </Button>
        <Button loading variant="ghost">
          Please wait
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button loading icon={LuPlus} tooltip="Adding..." />
        <Button loading leftIcon={LuDownload}>
          Downloading
        </Button>
        <Button loading circle>
          A
        </Button>
      </div>
    </div>
  ),
};

export const WithIconAndLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button leftIcon={LuSearch} size="sm">
          Search
        </Button>
        <Button leftIcon={LuDownload} size="md">
          Download
        </Button>
        <Button leftIcon={LuSettings} size="lg">
          Settings
        </Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button leftIcon={LuPlus} variant="outline" color="primary">
          Add New
        </Button>
        <Button leftIcon={LuTrash} variant="ghost" color="destructive">
          Delete Item
        </Button>
      </div>
    </div>
  ),
};

export const LinkedButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button href="https://github.com" external>
          GitHub
        </Button>
        <Button
          href="https://github.com"
          external
          rightIcon={LuArrowRight}
          variant="outline"
        >
          Visit Repository
        </Button>
        <Button
          href="https://docs.example.com"
          external
          icon={LuDownload}
          tooltip="Download Docs"
        />
      </div>
      <div className="flex gap-4 items-center">
        <Button href="/dashboard" leftIcon={LuSettings} variant="ghost">
          Internal Link
        </Button>
        <Button href="https://twitter.com" external color="blue-500">
          Twitter
        </Button>
      </div>
    </div>
  ),
};
