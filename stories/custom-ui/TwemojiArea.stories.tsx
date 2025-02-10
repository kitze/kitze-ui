import type { Meta, StoryObj } from "@storybook/react";
import { TwemojiArea } from "@/components/custom-ui/TwemojiArea";

const meta = {
  title: "Custom UI/TwemojiArea",
  component: TwemojiArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TwemojiArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => <TwemojiArea>Hello 👋 Welcome to our app! 🚀</TwemojiArea>,
};

export const WithComplexEmojis: Story = {
  render: () => (
    <div className="space-y-4">
      <TwemojiArea>
        Meet our team 👨‍💻👩‍💻! We love building cool stuff 🛠️
      </TwemojiArea>
      <TwemojiArea>
        Family time is important 👨‍👩‍👧‍👦 and so is having fun 🎮!
      </TwemojiArea>
      <TwemojiArea>Let's make something amazing together ✨💫🌟</TwemojiArea>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <TwemojiArea size="xs">Extra small emojis 👋 in this text 🚀</TwemojiArea>
      <TwemojiArea size="sm">Small emojis 👋 in this text 🚀</TwemojiArea>
      <TwemojiArea size="md">Medium emojis 👋 in this text 🚀</TwemojiArea>
      <TwemojiArea size="lg">Large emojis 👋 in this text 🚀</TwemojiArea>
      <TwemojiArea size="xl">Extra large emojis 👋 in this text 🚀</TwemojiArea>
    </div>
  ),
};

export const NoEmojis: Story = {
  render: () => (
    <TwemojiArea>This is just regular text without any emojis!</TwemojiArea>
  ),
};

export const WithNestedContent: Story = {
  render: () => (
    <TwemojiArea>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Project Status 📊</h2>
        <div className="pl-4">
          <div className="mb-2">
            Frontend Progress 🎨
            <div className="pl-4">
              • UI Components ✨
              <br />• Responsive Design 📱
            </div>
          </div>
          <div className="mb-2">
            Backend Progress 🔧
            <div className="pl-4">
              • API Development 🚀
              <br />• Database Setup 💾
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded">
          <p>Team Collaboration 🤝</p>
          <ul className="list-disc pl-6">
            <li>Daily Standups 📅</li>
            <li>Code Reviews 👩‍💻</li>
            <li>Team Building 🎮</li>
          </ul>
        </div>
      </div>
    </TwemojiArea>
  ),
};

export const WithMixedContent: Story = {
  render: () => (
    <TwemojiArea>
      <div className="space-y-4">
        <h1>Welcome to our App! 👋</h1>
        <p>Here's what you can do:</p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Create Project 📝
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Join Team 👥
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded">
            <h3>Features 🚀</h3>
            <p>Amazing stuff inside!</p>
          </div>
          <div className="p-4 border rounded">
            <h3>Support 💡</h3>
            <p>We're here to help!</p>
          </div>
        </div>
      </div>
    </TwemojiArea>
  ),
};
