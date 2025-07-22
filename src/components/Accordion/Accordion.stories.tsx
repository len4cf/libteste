import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
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
              Use para encurtar as páginas e reduzir a rolagem quando o conteúdo
              não for crucial para leitura completa.
            </li>
            <li>Para organizar e agrupar informações relacionadas.</li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'O componente Accordion oferece grandes quantidades de conteúdo em um pequeno espaço, por meio de uma visualização com efeito de dropdown. O título fornece à pessoa usuária uma visão geral de conteúdo, permitindo que ela decida com quais sessões deseja interagir.',
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'single',
    items: [
      {
        value: 'item-1',
        headline: 'Item 1',
        subtitle: 'Subtitle for Item 1',
        content: <div>Content for Item 1</div>,
      },
      {
        value: 'item-2',
        headline: 'Item 2',
        subtitle: 'Subtitle for Item 2',
        content: <div>Content for Item 2</div>,
      },
    ],
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    items: [
      {
        value: 'item-1',
        headline: 'Item 1',
        subtitle: 'Subtitle for Item 1',
        content: <div>Content for Item 1</div>,
      },
      {
        value: 'item-2',
        headline: 'Item 2',
        subtitle: 'Subtitle for Item 2',
        content: <div>Content for Item 2</div>,
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    type: 'multiple',
    items: [
      {
        value: 'item-1',
        headline: 'Item 1',
        subtitle: 'Subtitle for Item 1',
        disabled: true,
        content: <div>Content for Item 1</div>,
      },
      {
        value: 'item-2',
        headline: 'Item 2',
        subtitle: 'Subtitle for Item 2',
        content: <div>Content for Item 2</div>,
      },
    ],
  },
};

export const DisabledAll: Story = {
  args: {
    type: 'multiple',
    items: [
      {
        value: 'item-1',
        headline: 'Item 1',
        subtitle: 'Subtitle for Item 1',
        disabled: true,
        content: <div>Content for Item 1</div>,
      },
      {
        value: 'item-2',
        headline: 'Item 2',
        subtitle: 'Subtitle for Item 2',
        disabled: true,
        content: <div>Content for Item 2</div>,
      },
    ],
  },
};
