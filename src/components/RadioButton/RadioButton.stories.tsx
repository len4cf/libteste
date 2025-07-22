import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroupField } from './RadioButton';

const meta: Meta<typeof RadioGroupField> = {
  title: 'Components/RadioGroupField',
  component: RadioGroupField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultValue: {
      control: { type: 'text', disable: true },
      description: 'The default value of the radio group.',
      table: {
        type: { summary: 'string' },
      },
    },
    options: {
      control: { type: 'object', disable: true },
      description: 'An array of options for the radio group.',
      table: {
        type: {
          summary:
            'Array<{ label: string; value: string; disabled?: boolean }>',
        },
        defaultValue: { summary: '[]' },
      },
    },
    asChild: {
      control: { disable: true },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroupField>;

export const Default: Story = {
  args: {
    disabled: false,
    defaultValue: '2',
    options: [
      { label: 'Opção 1', value: '1' },
      { label: 'Opção 2', value: '2' },
    ],
  },
};

export const DisabledAll: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'Opção 1', value: '1' },
      { label: 'Opção 2', value: '2' },
    ],
  },
};

export const DisabledOption: Story = {
  args: {
    options: [
      { label: 'Opção 1', value: '1' },
      { label: 'Opção 2', value: '2' },
      { disabled: true, label: 'Opção 3', value: '3' },
    ],
  },
};
