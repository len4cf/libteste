import type { Meta, StoryObj } from '@storybook/react';
import { Attachment } from './Attachment';

const meta: Meta<typeof Attachment> = {
  title: 'Components/Attachment',
  component: Attachment,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'hover', 'loading'],
    },
  },
  args: {
    fileName: 'meuArquivo.pdf',
    fileSize: '780.3 KB',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default' },
};

export const Hover: Story = {
  args: { variant: 'hover' },
};

export const Loading: Story = {
  args: { variant: 'loading' },
};
