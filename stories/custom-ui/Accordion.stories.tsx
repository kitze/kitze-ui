import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../../src/components/custom-ui/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Custom UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const defaultItems = [
  {
    title: "What is your refund policy?",
    content:
      "If you are unhappy with your purchase for any reason, email us within 90 days and we will refund you in full, no questions asked.",
  },
  {
    title: "Do you offer technical support?",
    content:
      "Yes, we offer technical support via email. Our support team typically responds within 24-48 hours.",
  },
  {
    title: "How do I contact customer service?",
    content:
      "You can reach our customer service team at support@example.com or through our contact form on the website.",
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const CustomStyles: Story = {
  args: {
    items: defaultItems,
    classNames: {
      root: "bg-gray-900 p-6 rounded-lg",
      title: "text-blue-400",
      content: "text-gray-300",
      icon: "text-blue-400",
    },
  },
};

export const SingleItem: Story = {
  args: {
    items: [defaultItems[0]],
  },
};

export const LongContent: Story = {
  args: {
    items: [
      {
        title: "Terms and Conditions",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      },
    ],
  },
};
