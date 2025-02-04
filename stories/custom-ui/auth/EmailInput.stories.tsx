import { Meta, StoryObj } from '@storybook/react';
import { EmailInput } from '@kitze/ui';

const meta = {
  title: 'Custom UI/Auth/EmailInput',
  component: EmailInput,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EmailInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    autoFocus: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'example@email.com',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
