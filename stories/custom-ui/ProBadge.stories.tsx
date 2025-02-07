import type { Meta, StoryObj } from '@storybook/react';
import { ProBadge } from '../../src/components/custom-ui/ProBadge';

const meta = {
  title: 'Custom UI/ProBadge',
  component: ProBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProBadge>;

export default meta;
type Story = StoryObj<typeof ProBadge>;

// Default badge with violet color
export const Default: Story = {
  args: {},
};

// All variants
export const Variants: Story = {
  render: () => (
    <div className="vertical space-y-4">
      <div className="horizontal space-x-4">
        <ProBadge variant="default" />
        <ProBadge variant="solid" />
        <ProBadge variant="outline" />
        <ProBadge variant="glow" />
        <ProBadge variant="outerglow" />
      </div>
      <div className="text-xs text-foreground/50 vertical space-y-1">
        <div>⬆️</div>
        <div>Left to right:</div>
        <div>default, solid, outline, glow, outerglow</div>
      </div>
    </div>
  ),
};

// Different colors with solid variant
export const Colors: Story = {
  render: () => (
    <div className="vertical space-y-4">
      <div className="horizontal space-x-4">
        <ProBadge variant="solid" color="violet-400" />
        <ProBadge variant="solid" color="blue-400" />
        <ProBadge variant="solid" color="green-400" />
        <ProBadge variant="solid" color="yellow-400" />
        <ProBadge variant="solid" color="red-400" />
      </div>
      <div className="text-xs text-foreground/50">Using solid variant</div>
    </div>
  ),
};

// Glowing variants with different colors
export const GlowingVariants: Story = {
  render: () => (
    <div className="vertical space-y-8">
      <div className="vertical space-y-4">
        <div className="horizontal space-x-4">
          <ProBadge variant="glow" color="violet-400" />
          <ProBadge variant="glow" color="blue-400" />
          <ProBadge variant="glow" color="green-400" />
          <ProBadge variant="glow" color="yellow-400" />
          <ProBadge variant="glow" color="red-400" />
        </div>
        <div className="text-xs text-foreground/50">Inner glow variant</div>
      </div>

      <div className="vertical space-y-4">
        <div className="horizontal space-x-4">
          <ProBadge variant="outerglow" color="violet-400" />
          <ProBadge variant="outerglow" color="blue-400" />
          <ProBadge variant="outerglow" color="green-400" />
          <ProBadge variant="outerglow" color="yellow-400" />
          <ProBadge variant="outerglow" color="red-400" />
        </div>
        <div className="text-xs text-foreground/50">Outer glow variant</div>
      </div>
    </div>
  ),
};

// Custom dark mode color
export const CustomDarkColor: Story = {
  args: {
    variant: 'solid',
    color: 'blue-400',
    darkColor: 'violet-400',
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    variant: 'solid',
    classNames: {
      root: 'p-4 bg-background/50 rounded-xl',
      glow: 'blur-lg',
      icon: 'w-8 h-8',
    },
  },
};

// Different sizes through className
export const Sizes: Story = {
  render: () => (
    <div className="horizontal space-x-4 items-center">
      <ProBadge variant="solid" className="scale-75" />
      <ProBadge variant="solid" />
      <ProBadge variant="solid" className="scale-125" />
      <ProBadge variant="solid" className="scale-150" />
    </div>
  ),
}; 