import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,

  argTypes: {
    id: {
      control: { disable: true },
    },
    asChild: {
      control: {
        disable: true,
      },
    },
  },
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
              Várias opções de escolha estão disponíveis e a pessoa usuária
              precisa selecionar uma ou mais.
            </li>
            <li>
              A pessoa usuária precisa selecionar opções de uma lista de itens
              relacionados.
            </li>
            <li>
              Se um Toggle/Switch não indicar claramente qual a ação que será
              executada, use checkboxes.
            </li>
            <li>
              Se existir uma única opção de sim/não ao selecionar/deselecionar.
              Por exemplo: na tela de criação de nova conta, use checkbox em
              “aceitar os termos de uso”.
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'Checkbox são caixas de seleção que podem estar marcadas, desmarcadas ou desabilitadas.',
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Accept terms and conditions',
  },
};

export const Regular: Story = {
  args: {
    size: 'regular',
    label: 'Accept terms and conditions',
  },
};

export const TextFalse: Story = {
  args: {
    size: 'regular',
    label: '',
  },
};

export const Disabled: Story = {
  args: {
    size: 'small',
    disabled: true,
    label: 'Accept terms and conditions',
  },
};
