import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
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
              Quando precisamos adicionar informações ao elemento e auxiliar o
              usuário a tomar decisões
            </li>
            <li>Para descrever ícones e botões</li>
            <li>
              Em imagens e ilustrações que precisam de uma explicação maior
            </li>
          </ul>
          <h3>Boas práticas</h3>
          <ul>
            <li>
              Dependendo do contexto, pode-se usar uma Tooltip com ou sem botão
              de fechar
            </li>
            <li>
              Em casos em que precisamos garantir que o usuário veja o conteúdo
              da Tooltip, é preferível que, ao entrar na tela, a Tooltip já
              esteja aparente, podendo ser dispensada
            </li>
            <li>
              O comportamento padrão da Tooltip é aparecer quando o mouse passa
              sobre o elemento e sumir assim que o mouse sai
            </li>
          </ul>
          <h3>Do's and Don'ts</h3>
          <ul>
            <li>Use para informações adicionais</li>
            <li>
              Não use para mostrar informações essenciais, estas devem vir
              explícitas na interface em um título ou texto descritivo
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'Caixa de mensagem que exibe informações adicionais quando o usuário passa o mouse ou clica no elemento. As informações textuais contidas em uma tooltip devem ser contextuais, úteis e diretas.',
      },
    },
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: [
        'down-center',
        'down-left',
        'down-right',
        'up-center',
        'up-left',
        'up-right',
      ],
    },
    color: {
      control: { type: 'radio' },
      options: ['black', 'white'],
    },
    content: {
      control: { disable: true },
    },
    children: {
      control: { disable: true },
    },
  },
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Black: Story = {
  args: {
    position: 'down-center',
    color: 'black',
    delayDuration: 100,
    children: (
      <button className='min-w-[120px] bg-zinc-600 hover:bg-zinc-500 cursor-pointer text-white rounded p-3'>
        Hover me
      </button>
    ),
    content: <div>Tooltip content</div>,
  },
};

export const White: Story = {
  args: {
    position: 'down-center',
    color: 'white',
    delayDuration: 100,
    children: (
      <button className='min-w-[120px] bg-zinc-600 hover:bg-zinc-500 cursor-pointer text-white rounded p-3'>
        Hover me
      </button>
    ),
    content: <div>Tooltip content</div>,
  },
};

export const DownCenter: Story = {
  args: {
    position: 'down-center',
    color: 'black',
    delayDuration: 100,
    children: (
      <button className='min-w-[120px] bg-zinc-600 hover:bg-zinc-500 cursor-pointer text-white rounded p-3'>
        Hover me
      </button>
    ),
    content: <div>Tooltip content</div>,
  },
};

export const DownRight: Story = {
  args: {
    position: 'down-right',
    color: 'black',
    delayDuration: 100,
    children: (
      <button className='min-w-[120px] bg-zinc-600 hover:bg-zinc-500 cursor-pointer text-white rounded p-3'>
        Hover me
      </button>
    ),
    content: <div>Tooltip content</div>,
  },
};

export const DownLeft: Story = {
  args: {
    position: 'down-left',
    color: 'black',
    delayDuration: 100,
    children: (
      <button className='min-w-[120px] bg-zinc-600 hover:bg-zinc-500 cursor-pointer text-white rounded p-3'>
        Hover me
      </button>
    ),
    content: <div>Tooltip content</div>,
  },
};

export const UpCenter: Story = {
  args: {
    position: 'up-center',
    color: 'black',
    delayDuration: 100,
    children: (
      <button className='min-w-[120px] bg-zinc-600 hover:bg-zinc-500 cursor-pointer text-white rounded p-3'>
        Hover me
      </button>
    ),
    content: <div>Tooltip content</div>,
  },
};

export const UpRight: Story = {
  args: {
    position: 'up-right',
    color: 'black',
    delayDuration: 100,
    children: (
      <button className='min-w-[120px] bg-zinc-600 hover:bg-zinc-500 cursor-pointer text-white rounded p-3'>
        Hover me
      </button>
    ),
    content: <div>Tooltip content</div>,
  },
};

export const UpLeft: Story = {
  args: {
    position: 'up-left',
    color: 'black',
    delayDuration: 100,
    children: (
      <button className='min-w-[120px] bg-zinc-600 hover:bg-zinc-500 cursor-pointer text-white rounded p-3'>
        Hover me
      </button>
    ),
    content: <div>Tooltip content</div>,
  },
};
