import { Divider } from './Divider';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
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
              Use quando precisar dividir seções de conteúdo umas das outras.
            </li>
            <li>Use para separar o conteúdo em grupos.</li>
            <li>
              Use os divisores com moderação, para criar agrupamentos ou para
              separar itens.
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'Os componentes divisores são usados para separar e distinguir seções de conteúdo ou grupos de itens do menu. Visualmente, os componentes são elaborados em linhas horizontais ou verticais.',
      },
    },
  },
  argTypes: {
    vertical: {
      control: { type: 'boolean' },
      description: 'Posição da aplicação do divisor na página.',
      defaultValue: false,
    },
    density: {
      control: { type: 'radio' },
      options: ['1px', '2px', '4px'],
      description:
        'Espessura da linha que separa e organiza o conteúdo da página.',
      defaultValue: '1px',
    },
  },
  decorators: [
    (Story, context) => {
      const isVertical = context.args.vertical;
      const containerStyle = {
        height: isVertical ? '200px' : '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      };

      return (
        <div style={containerStyle}>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    vertical: false,
    density: '1px',
  },
};

export const Vertical: Story = {
  args: {
    vertical: true,
    density: '1px',
  },
};
