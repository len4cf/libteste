import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Stories, Title } from '@storybook/blocks';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <p>
            Elemento de controle gráfico subordinado à janela principal de um
            aplicativo. Uma janela modal cria um modo que desabilita a janela
            principal, mas ainda a mantém visível.
          </p>
          <Stories />
        </>
      ),
      story: {
        height: '40vh',
      },
    },
  },
  argTypes: {
    variants: {
      control: false,
    },
    isOpen: {
      control: 'boolean',
    },
    onClose: {
      action: 'fecharModal',
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Horizontal: Story = {
  args: {
    variants: 'horizontal',
    isOpen: true,
    onClose: () => {},
    children: (
      <>
        <label
          htmlFor='cpf'
          className='block text-[12px] text-[var(--color-base-dark-03)] mb-1'
        >
          Inserir CPF:
        </label>
        <input
          type='text'
          id='cpf'
          placeholder='000.000.000-00'
          className='w-full px-4 py-2 border border-[var(--color-base-dark-03)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary-pure)] placeholder:text-[13px]'
        />
        <button className='bg-[var(--color-brand-primary-pure)] text-white text-sm font-semibold py-3 px-8 rounded-full mt-4 transition duration-150 ease-in-out'>
          Enviar
        </button>
      </>
    ),
  },
};
export const Vertical: Story = {
  args: {
    variants: 'vertical',
    isOpen: true,
    onClose: () => {},
    children: (
      <>
        <h2 className='text-lg font-semibold mb-4'>Ir para rematrícula?</h2>
        <p className='mb-4 text-[17px] text-center'>
          Vamos te redirecionar para a sua rematrícula ou ajuste acadêmico
          através do navegador.
        </p>
        <button className='text-[var(--color-brand-primary-pure)] font-semibold text-sm cursor-pointer hover:underline'>
          Ir para rematrícula
        </button>
      </>
    ),
  },
};
