import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta = {
  title: 'Components/Badge',
  component: Badge,
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
          <p className='!m-0'>
            Para associar o estado em que se encontra determinado item/elemento.
          </p>
          <ul>
            <li>
              <span className='font-bold !text-sm'>Default</span>: utilizado
              como padrão, ao menos que se enquadre em um caso de uso
              específico.
            </li>
            <li>
              <span className='font-bold !text-sm'>Success</span>: usado para
              comunicar o sucesso de uma ação.
            </li>
            <li>
              <span className='font-bold !text-sm'>Warning</span>: usado para
              comunicar um aviso.
            </li>
            <li>
              <span className='font-bold !text-sm'>Danger</span>: usado para
              comunicar um perigo ou erro.
            </li>
            <li>
              <span className='font-bold !text-sm'>Draft</span>: usado para
              informar item/elemento em rascunho.
            </li>
          </ul>
          <p>Em componentes que necessitam de identificação</p>
          <ul>
            <li>Tabelas, cards e formulários</li>
            <li>Filtragem de dados</li>
          </ul>
          <h3>Boas práticas</h3>
          <ul>
            <li>Utilizar cores vibrantes para não deixar de ser notado</li>
            <li>
              Os badges precisam aparecer sobre um ícone ou do lado de um texto
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'São utilizadas para rotular, organizar ou categorizar objetos usando palavras-chave. As tags também servem como um rótulo para numerais de exibição.',
      },
    },
  },
  argTypes: {
    iconOnly: {
      control: { type: 'boolean' },
    },
    icon: {
      options: ['noIcon', 'trash', 'check', 'info'],
      mapping: {
        noIcon: null,
        trash: <i className='fa-solid fa-trash' />,
        check: <i className='fa-solid fa-check' />,
        info: <i className='fa-regular fa-circle-info'></i>,
      },
      control: {
        type: 'select',
      },
      if: { arg: 'iconOnly', truthy: true },
    },
    asChild: {
      control: { disable: true },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'regular',
    children: 'Default',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'regular',
    children: 'Success',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'regular',
    children: 'Danger',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'regular',
    children: 'Warning',
  },
};

export const Draft: Story = {
  args: {
    variant: 'draft',
    size: 'regular',
    children: 'Draft',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'default',
    size: 'regular',
    iconOnly: true,
    icon: <i className='fa-solid fa-trash'></i>,
    // icon: <Icon className="w-4 h-4" />,
  },
};
