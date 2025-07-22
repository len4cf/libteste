import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: { type: 'text' },
    },
    linkText: {
      control: { type: 'text' },
      description:
        'Pequeno texto que faz a indicação e comunica o que está vinculado',
    },
    leftArrow: {
      control: { type: 'boolean' },
      description: 'Apresenta uma seta no lado esquerdo do link',
    },
    rightArrow: {
      control: { type: 'boolean' },
      description: 'Apresenta uma seta no lado direito do link',
    },
    external: {
      control: { type: 'boolean' },
      description: 'Indica que o link leva para uma página externa',
      if: { arg: 'leftArrow', truthy: false },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'regular', 'large'],
      description:
        'São os tamanhos do elemento para melhor utilização no corpo de texto ou aplicação única.',
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
              Os Links podem ser usados no meio ou final de blocos de texto.
            </li>
            <li>
              Podem levar a pessoa usuária para seções dentro da interface ou
              para links externos.
            </li>
            <li>
              Aplicamos os links também em rodapés ou para indicar termos de
              uso.
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'Elementos formados por textos ou elementos gráficos que, quando acionados, levam para uma outra página ou documentos.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '#',
    linkText: 'Link',
    leftArrow: false,
    rightArrow: false,
    external: false,
    size: 'regular',
  },
};

export const Small: Story = {
  args: {
    href: '#',
    linkText: 'Link',
    leftArrow: false,
    rightArrow: false,
    external: false,
    size: 'small',
  },
};

export const RightArrow: Story = {
  args: {
    href: '#',
    linkText: 'Link',
    leftArrow: false,
    rightArrow: true,
    external: false,
    size: 'regular',
  },
};

export const LeftArrow: Story = {
  args: {
    href: '#',
    linkText: 'Link',
    leftArrow: true,
    rightArrow: false,
    external: false,
    size: 'regular',
  },
};

export const External: Story = {
  args: {
    href: '#',
    linkText: 'Link',
    leftArrow: false,
    rightArrow: false,
    external: true,
    size: 'regular',
  },
};

export const Large: Story = {
  args: {
    href: '#',
    linkText: 'Link',
    leftArrow: false,
    rightArrow: false,
    external: false,
    size: 'large',
  },
};
