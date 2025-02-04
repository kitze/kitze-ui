import { Meta, StoryObj } from '@storybook/react';
import { AuthForm, AuthFormDivider, EmailInput, PasswordInput, LoginGithubButton, CustomButton } from '@kitze/ui';

const meta = {
  title: 'Custom UI/Auth/AuthForm',
  component: AuthForm,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {
  args: {
    title: 'Welcome back',
    subtitle: 'Sign in to your account to continue',
    children: (
      <>
        <EmailInput autoFocus />
        <PasswordInput />
        <CustomButton size="lg" className="w-full">
          Sign in
        </CustomButton>
        <AuthFormDivider label="Or continue with" />
        <LoginGithubButton />
      </>
    ),
    footer: (
      <div className="h space-x-1 text-sm text-muted-foreground">
        <span>New here?</span>
        <CustomButton variant="link" className="h-auto p-0 text-sm font-medium">
          Create an account
        </CustomButton>
      </div>
    ),
  },
};

export const SignupForm: Story = {
  args: {
    title: 'Create an account',
    subtitle: 'Join to track and manage your projects',
    children: (
      <>
        <EmailInput autoFocus />
        <PasswordInput />
        <CustomButton size="lg" className="w-full">
          Create account
        </CustomButton>
        <AuthFormDivider label="Or continue with" />
        <LoginGithubButton />
      </>
    ),
    footer: (
      <div className="h space-x-1 text-sm text-muted-foreground">
        <span>Already have an account?</span>
        <CustomButton variant="link" className="h-auto p-0 text-sm font-medium">
          Sign in
        </CustomButton>
      </div>
    ),
  },
};
