import type { Meta, StoryObj } from '@storybook/react';
import { Copy } from './Copy';

const meta: Meta<typeof Copy> = {
  title: 'Components/Copy',
  component: Copy,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'É o componente que permite e confirma a ação de copiar códigos ou textos que podem ser inseridos em campos digitáveis dentro ou fora da plataforma.',
      },
    },
  },
  argTypes: {
    textToCopy: {
      control: 'text',
      description: 'O texto que será copiado para a área de transferência.',
    },
    label: {
      control: 'text',
      description: 'O texto visível no gatilho de cópia (ex: "Copiar").',
      if: { arg: 'noText', eq: false },
    },
    icon: {
      control: { disable: true },
      table: { disable: true },
      options: ['copyIcon', 'noIcon'],
      mapping: {
        copyIcon: <i className='fa-regular fa-copy'></i>,
        noIcon: undefined,
      },
      description: 'Ícone a ser exibido no gatilho.',
    },
    disabled: {
      control: 'boolean',
      description:
        'Se verdadeiro, o gatilho estará desabilitado e não será clicável.',
    },
    noText: {
      control: 'boolean',
      description:
        'Se verdadeiro, o gatilho renderizará apenas o ícone, sem texto de apoio.',
    },
    copyType: {
      control: { type: 'inline-radio' },
      options: ['default', 'mobile'],
      description:
        'Define o estilo visual: normal (com hover) ou mobile (sem efeitos).',
    },
    className: {
      control: { disable: true },
      table: { disable: true },
    },
  },
  args: {
    textToCopy: 'Este é o texto padrão para copiar.',
    label: 'Copiar',
    icon: 'copyIcon',
    noText: false,
    disabled: false,
    copyType: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Copy>;

export const DefaultVersionState: Story = {
  name: 'Default',
  args: {
    textToCopy: '',
    copyType: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sem textCopy somente para visualização.',
      },
    },
  },
};

export const MobileVersionState: Story = {
  name: 'Mobile',
  render: args => (
    <div>
      <div className='text items-center '>
        <h2 className=' text-gray-700'>Código de ativação</h2>
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-gray-900 font-mono'>{args.textToCopy}</span>
        <Copy {...args} />
      </div>
    </div>
  ),
  args: {
    textToCopy: 'LAB-INFO-8ABI-ADFFV',
    copyType: 'mobile',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Simula o comportamento do gatilho em dispositivos móveis, desativando os efeitos de hover.',
      },
    },
  },
};

export const IconOnlyTriggerUsage: Story = {
  name: 'Only icon',
  render: args => (
    <div className='flex items-center gap-2'>
      <span className='font-semibold text-gray-700'>ID do Pedido:</span>
      <span className='text-gray-900 font-mono'>{args.textToCopy}</span>
      <Copy {...args} noText={true} />
    </div>
  ),
  args: {
    textToCopy: 'PED-XYZ-789-ABC',
    icon: 'copyIcon',
    copyType: 'default',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra o gatilho de cópia apenas com ícone, ideal para economia de espaço.',
      },
    },
  },
};
