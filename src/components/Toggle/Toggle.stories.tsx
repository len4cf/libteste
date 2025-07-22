import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Canvas />
          <Controls />
          <h3>Quando usar?</h3>
          <ul>
            <li>
              Podem ser usados para habilitar ou desabilitar configurações como
              "receber ou não" push notifications;
            </li>
            <li>Para alternar entre dois estados;</li>
            <li>Para possíveis sistemas de filtros.</li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'O toggle possibilita à pessoa usuária habilitar ou desabilitar algo. Funciona como um botão de on/off.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do toggle',
    },
    toggleText: {
      control: { type: 'text' },
      description: 'Texto exibido ao lado do toggle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    size: 'medium',
    toggleText: 'Toggle Text',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const ToggleWithText: Story = {
  args: {
    size: 'medium',
    toggleText: 'Toggle Text',
  },
};
