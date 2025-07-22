import type { Meta, StoryObj } from '@storybook/react';
import { MenuHamburguer } from './MenuHamburguer';
import React from 'react';
import pucprMonochromaticLogoRgb from '../../assets/logos/pucpr_horizontal_rgb.png';
import pucprMonochromaticLogo from '../../assets/logos/pucpr_horizontal_monocromatico.png';

type MenuHamburguerStoryArgs = {
  label?: string;
  children: React.ReactNode;
  className?: string;
  logo?: React.ReactNode;
  variant?: 'puc' | 'dark' | 'light';
  position?: 'left' | 'right';
  showWebAlunoIcon?: boolean;
};

const SampleMenuContent = (
  <ul className='space-y-2'>
    <li>
      <a href='#' className='block p-2 hover:bg-gray-100 rounded text-gray-800'>
        Página Inicial
      </a>
    </li>
    <li>
      <a href='#' className='block p-2 hover:bg-gray-100 rounded text-gray-800'>
        Sobre Nós
      </a>
    </li>
    <li>
      <a href='#' className='block p-2 hover:bg-gray-100 rounded text-gray-800'>
        Serviços
      </a>
    </li>
    <li>
      <a href='#' className='block p-2 hover:bg-gray-100 rounded text-gray-800'>
        Contato
      </a>
    </li>
  </ul>
);

const getLogoDarkWithTextAndImage = (
  currentVariant: 'puc' | 'dark' | 'light' | undefined,
): React.ReactNode => {
  const safeVariant = currentVariant || 'puc';
  const textColorClass =
    safeVariant === 'light' ? 'text-[#8a0538]' : 'text-white';
  const imageSource =
    safeVariant === 'light'
      ? pucprMonochromaticLogoRgb
      : pucprMonochromaticLogo;

  return (
    <div className='flex items-center gap-x-2'>
      <span
        className={`mt-4 text-[12px] leading-[12px] pb-[18px] block font-normal ${textColorClass}`}
      >
        PÓS<strong>PUCPR</strong>DIGITAL
      </span>
      <div className='w-[56.52px] h-[24px]'>
        <img src={imageSource} alt='Logo pucpr' />
      </div>
    </div>
  );
};

const getLogoLightImageOnly = (
  currentVariant: 'puc' | 'dark' | 'light' | undefined,
): React.ReactNode => {
  const safeVariant = currentVariant || 'light';
  const imageSource =
    safeVariant === 'light'
      ? pucprMonochromaticLogoRgb
      : pucprMonochromaticLogo;

  return (
    <div className='flex items-center'>
      <div className='w-[56.52px] h-[24px]'>
        <img src={imageSource} alt='Logo pucpr' />
      </div>
    </div>
  );
};

const meta: Meta<MenuHamburguerStoryArgs> = {
  title: 'Components/Menu Hamburguer',
  component: MenuHamburguer,
  parameters: {
    docs: {
      description: {
        component:
          'Menu que usa o ícone com as 3 listras como principal forma de acesso aos itens de navegação da interface. Ao clicar no ícone, o restante do menu é revelado, utilizar apenas no header indicando que existem mais páginas de navegação. **Uso recomendado apenas em dispositivos móveis.**',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Texto auxiliar ao lado do ícone do menu.',
    },
    children: {
      control: { type: 'object' },
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
    logo: {
      control: false,
      description: 'Conteúdo customizado para a logo. Definido na story.',
    },
    variant: {
      control: { type: 'radio' },
      options: ['puc', 'dark', 'light'],
      description: 'Define o esquema de cores do menu.',
    },
    position: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Define a posição do ícone do hambúrguer no menu.',
    },
    showWebAlunoIcon: {
      control: { type: 'boolean' },
      description:
        "Exibe ou não o ícone WebAluno. Funciona apenas na variação 'puc'.",
    },
  },
};

export default meta;
type Story = StoryObj<MenuHamburguerStoryArgs>;

//STORIES

// Story para a variação "Puc color - Menu left" com WebAluno
export const PucColorMenuLeft: Story = {
  render: args => (
    <div style={{ height: '200px', width: '400px' }}>
      <MenuHamburguer {...args}>{SampleMenuContent}</MenuHamburguer>
    </div>
  ),
  args: {
    label: 'Menu',
    variant: 'puc',
    position: 'left',
    logo: undefined,
    showWebAlunoIcon: true,
  },
};

// Story para a variação "Dark color - Menu right"
export const DarkColorMenuRight: Story = {
  render: args => (
    <div style={{ height: '200px', width: '400px' }}>
      <MenuHamburguer
        {...args}
        logo={getLogoDarkWithTextAndImage(args.variant)}
      >
        {SampleMenuContent}
      </MenuHamburguer>
    </div>
  ),
  args: {
    label: '',
    variant: 'dark',
    position: 'right',
    showWebAlunoIcon: false,
  },
  argTypes: {
    showWebAlunoIcon: { table: { disable: true } }, //oculta a prop showWebAlunoIcon
  },
};

// Story para a variação "White color - Menu right"
export const WhiteColorMenuRight: Story = {
  render: args => (
    <div style={{ height: '200px', width: '400px' }}>
      <MenuHamburguer {...args} logo={getLogoLightImageOnly(args.variant)}>
        {SampleMenuContent}
      </MenuHamburguer>
    </div>
  ),
  args: {
    label: '',
    variant: 'light',
    position: 'right',
    showWebAlunoIcon: false,
  },
  argTypes: {
    showWebAlunoIcon: { table: { disable: true } }, //oculta a prop showWebAlunoIcon
  },
};
