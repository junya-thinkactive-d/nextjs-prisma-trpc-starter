import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/elements/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: ['primary', 'secondary', 'accent'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const AccentBackground: Story = {
  args: {
    backgroundColor: 'accent',
    label: 'Button',
  },
};
