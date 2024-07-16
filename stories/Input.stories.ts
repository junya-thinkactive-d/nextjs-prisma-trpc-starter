import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/elements/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    fullWidth: { control: 'boolean' },
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    error: 'Invalid email address',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    fullWidth: true,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};
