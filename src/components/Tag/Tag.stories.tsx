import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tag } from './Tag';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tags',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Texto que identifica a situação do elemento',
    },
    color: {
      control: { type: 'radio' },
      options: ['purple', 'bordo'],
      description: 'São as cores disponíveis para os estilos de Tag',
    },
    style: {
      control: { type: 'radio' },
      options: ['category', 'label'],
      description:
        'São os estilos disponíveis para as Tags, cada um com suas características visuais.',
    },
    disabled: {
      control: { type: 'boolean' },
      description:
        'Desabilita a Tag, tornando-a não interativa e com aparência de desativada.',
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
          <p className='!m-0'>
            As tags são utilizadas para associar o estado em que se encontra um
            item/elemento ou em componentes que necessitam de identificação,
            como tabelas, cards e formulários.
          </p>
          <h3>Boas práticas</h3>
          <ul>
            <li>
              Você pode usar as guias em qualquer lugar da hierarquia da página:
              uma navegação de nível superior ou em outro componente
            </li>
            <li>
              Utilize os tipos predefinidos de tags com cores que representam
              status de uma informação/ação
            </li>
            <li>Use rótulos curtos</li>
          </ul>
          <h3>Do’s and Don’ts</h3>
          <ul>
            <li>
              Não use tags como elemento de ação, para isso prefira botões
            </li>
            <li>Não use muitas tabs, pois pode ficar confuso</li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'Usadas para rotular, organizar ou categorizar objetos, ou ações com o auxílio de palavras-chave.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    style: 'label',
    label: 'Tag label',
    color: 'purple',
  },
  render: args => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <Tag
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    );
  },
};

export const DefaultBordô: Story = {
  args: {
    style: 'label',
    label: 'Tag label',
    color: 'bordo',
  },
  render: args => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <Tag
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    );
  },
};

export const Selected: Story = {
  args: {
    style: 'label',
    label: 'Tag label',
    color: 'purple',
  },
  render: args => {
    const [isSelected, setIsSelected] = useState(true);

    return (
      <Tag
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    );
  },
};

export const Category: Story = {
  args: {
    style: 'category',
    label: 'Tag category',
    color: 'bordo',
    icon: <i className='fa-solid fa-user fa-xs'></i>,
  },
  render: args => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <Tag
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    );
  },
};

export const CategorySelected: Story = {
  args: {
    style: 'category',
    label: 'Tag category',
    color: 'bordo',
    icon: <i className='fa-solid fa-user fa-xs'></i>,
  },
  render: args => {
    const [isSelected, setIsSelected] = useState(true);

    return (
      <Tag
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    style: 'label',
    label: 'Tag label',
    color: 'purple',
    disabled: true,
  },
  render: args => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <Tag
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    );
  },
};

export const CategoryDisabled: Story = {
  args: {
    style: 'category',
    label: 'Tag category',
    disabled: true,
    color: 'bordo',
    icon: <i className='fa-solid fa-user fa-xs'></i>,
  },
  render: args => {
    const [isSelected, setIsSelected] = useState(true);

    return (
      <Tag
        {...args}
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    );
  },
};
