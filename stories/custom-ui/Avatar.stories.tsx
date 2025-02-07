import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../src/components/custom-ui/Avatar';

const meta = {
  title: 'Custom UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

// Basic avatar with image
export const WithImage: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/1160594',
    name: 'John Doe',
    size: 'md',
  },
};

// Avatar with initials (no image)
export const WithInitials: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
  },
};

// Avatar sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" name="XS Size" />
      <Avatar size="sm" name="SM Size" />
      <Avatar size="md" name="MD Size" />
      <Avatar size="lg" name="LG Size" />
      <Avatar size="xl" name="XL Size" />
    </div>
  ),
};

// Avatar with image in different sizes
export const ImageSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar 
        size="xs" 
        src="https://avatars.githubusercontent.com/u/1160594" 
        name="XS Size" 
      />
      <Avatar 
        size="sm" 
        src="https://avatars.githubusercontent.com/u/1160594" 
        name="SM Size" 
      />
      <Avatar 
        size="md" 
        src="https://avatars.githubusercontent.com/u/1160594" 
        name="MD Size" 
      />
      <Avatar 
        size="lg" 
        src="https://avatars.githubusercontent.com/u/1160594" 
        name="LG Size" 
      />
      <Avatar 
        size="xl" 
        src="https://avatars.githubusercontent.com/u/1160594" 
        name="XL Size" 
      />
    </div>
  ),
};

// Fallback (no name or image)
export const Fallback: Story = {
  args: {},
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    name: 'John Doe',
    size: 'md',
    className: 'bg-violet-500 text-white',
  },
}; 