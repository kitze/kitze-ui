import type { Meta, StoryObj } from "@storybook/react";
import { MobileHeader } from "../../components/custom-ui/MobileHeader";
import "../../styles/global.css";

const meta = {
  title: "Custom UI/MobileHeader",
  component: MobileHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    leftSide: {
      control: "text",
      description: "Content for the left side of the header",
    },
    middle: {
      control: "text",
      description: "Content for the middle of the header",
    },
    drawerContent: {
      control: "text",
      description: "Content for the drawer menu",
    },
    classNames: {
      control: "object",
      description: "Custom class names for different parts of the header",
    },
  },
} satisfies Meta<typeof MobileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper components for the stories
const Logo = () => <div className="font-bold text-xl">Logo</div>;

const DrawerContent = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Menu</h2>
    <nav className="flex flex-col gap-2">
      <a href="#" className="hover:text-blue-500">
        Home
      </a>
      <a href="#" className="hover:text-blue-500">
        About
      </a>
      <a href="#" className="hover:text-blue-500">
        Services
      </a>
      <a href="#" className="hover:text-blue-500">
        Contact
      </a>
    </nav>
  </div>
);

export const Default: Story = {
  args: {
    leftSide: <Logo />,
    middle: <span className="font-semibold">Page Title</span>,
    drawerContent: <DrawerContent />,
  },
};

export const WithoutMiddle: Story = {
  args: {
    leftSide: <Logo />,
    drawerContent: <DrawerContent />,
  },
};

export const CustomStyles: Story = {
  args: {
    leftSide: <Logo />,
    middle: <span className="font-semibold">Page Title</span>,
    drawerContent: <DrawerContent />,
    classNames: {
      root: "bg-gray-100",
      container: "max-w-7xl mx-auto",
      leftSide: "text-blue-500",
      middle: "text-gray-700",
      rightSide: "text-gray-600",
      menuButton: "bg-blue-50 rounded-full",
    },
  },
};

export const WithScrollBehavior: Story = {
  args: {
    leftSide: <Logo />,
    middle: <span className="font-semibold">Scroll to see shadow</span>,
    drawerContent: <DrawerContent />,
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div className="mt-20 p-4">
          <p className="mb-4">Scroll down to see the header shadow effect</p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} className="mb-4">
              Scroll content {i + 1}
            </p>
          ))}
        </div>
      </div>
    ),
  ],
};

export const WithCustomContent: Story = {
  args: {
    leftSide: (
      <div className="flex items-center gap-2">
        <img
          src="https://via.placeholder.com/32"
          alt="Logo"
          className="w-8 h-8 rounded"
        />
        <span className="font-bold">Brand</span>
      </div>
    ),
    middle: (
      <div className="flex items-center justify-center gap-4">
        <span className="text-sm">📱</span>
        <span className="font-medium">Mobile App</span>
      </div>
    ),
    drawerContent: (
      <div className="p-6">
        <h3 className="text-lg font-bold mb-6">Navigation</h3>
        <div className="flex flex-col gap-4">
          {["Dashboard", "Profile", "Settings", "Help"].map((item) => (
            <button
              key={item}
              className="text-left hover:bg-gray-50 p-2 rounded transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    ),
  },
};
