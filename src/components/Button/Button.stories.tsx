import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Servem como chamados para a ação. O conteúdo do botão informa diretamente o que acontecerá quando o usuário interagir com ele.',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    buttonType: {
      control: { type: 'radio' },
      options: ['default', 'secondary', 'tertiary'],
    },
    theme: {
      control: { type: 'radio' },
      options: ['base', 'onBrand'],
      defaultValue: 'base',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'default', 'large', 'iconCircle', 'iconRectangle'],
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],

      if: { arg: 'size', neq: ['iconCircle', 'iconRectangle'] },
    },
    icon: {
      control: { type: 'radio' },
      options: ['noIcon', 'info'],
      mapping: {
        noIcon: null,
        info: <i className='fa-regular fa-circle-info'></i>,
      },
    },
    label: {
      control: { type: 'text' },

      if: { arg: 'size', neq: ['iconCircle', 'iconRectangle'] },
    },
    asChild: {
      control: { disable: true },
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    buttonType: 'default',
    theme: 'base',
    size: 'default',
    label: 'Enviar',
    icon: 'noIcon',
    iconPosition: 'left',
  },
};

export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
    theme: 'base',
    size: 'default',
    label: 'Enviar',
    icon: 'noIcon',
    iconPosition: 'left',
  },
};

export const Tertiary: Story = {
  args: {
    buttonType: 'tertiary',
    theme: 'base',
    size: 'default',
    label: 'Enviar',
    icon: 'noIcon',
    iconPosition: 'left',
  },
};

export const OnBrandPrimary: Story = {
  args: {
    buttonType: 'default',
    theme: 'onBrand',
    size: 'default',
    label: 'Enviar',
    icon: 'noIcon',
    iconPosition: 'left',
  },
};

export const OnBrandSecondary: Story = {
  args: {
    buttonType: 'secondary',
    theme: 'onBrand',
    size: 'default',
    label: 'Enviar',
    icon: 'noIcon',
    iconPosition: 'left',
  },
};

export const OnBrandTertiary: Story = {
  args: {
    buttonType: 'tertiary',
    theme: 'onBrand',
    size: 'default',
    label: 'Enviar',
    icon: 'noIcon',
    iconPosition: 'left',
  },
};

export const IconOnlyCircle: Story = {
  args: {
    buttonType: 'default',
    theme: 'base',
    size: 'iconCircle',
    icon: 'info',
  },
};

export const IconOnlyRectangle: Story = {
  args: {
    buttonType: 'default',
    theme: 'base',
    size: 'iconRectangle',
    icon: 'info',
  },
};
