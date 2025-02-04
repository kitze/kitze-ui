import { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '@kitze/ui';

const meta = {
  title: 'Custom UI/Auth/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    autoFocus: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'password123',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
