import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
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
              Para agrupar informações relacionada em diferentes categorias.
            </li>
            <li>
              Para organizar conteúdos como formulários e configurações do
              usuário.
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'As tabs são utilizadas para organizar conteúdos relacionados, permitindo à pessoa usuária navegar entre grupos de informação em uma mesma página.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'regular'],
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'Valor padrão da aba selecionada',
    },
    tabs: {
      control: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Small: Story = {
  args: {
    size: 'small',
    defaultValue: 'tab2',
    tabs: [
      { label: 'Tab 1', value: 'tab1', content: 'Conteúdo da aba 1' },
      { label: 'Tab 2', value: 'tab2', content: 'Conteúdo da aba 2' },
      { label: 'Tab 3', value: 'tab3', content: 'Conteúdo da aba 3' },
    ],
  },
};

export const Regular: Story = {
  args: {
    size: 'regular',
    defaultValue: 'tab2',
    tabs: [
      { label: 'Tab 1', value: 'tab1', content: 'Conteúdo da aba 1' },
      { label: 'Tab 2', value: 'tab2', content: 'Conteúdo da aba 2' },
      { label: 'Tab 3', value: 'tab3', content: 'Conteúdo da aba 3' },
    ],
  },
};
