import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumbs,
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
          <p>
            Para grandes navegações e experiências complexas, onde o usuário
            necessita de um feedback do seu lugar na hierarquia de navegação.
          </p>
          <Stories />
        </>
      ),
      description: {
        component:
          'É um padrão de navegação secundário que auxilia a pessoa usuária a navegar pela plataforma e compreender a hierarquia de sua tragetória até aquele momento, podendo navegar de volta entre os itens e transitar pelas páginas.',
      },
    },
  },
  argTypes: {
    maxVisibleItems: {
      control: { type: 'number' },
    },
    items: {
      description: 'Direciona o usuário para página.',
    },
  },
} as Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '#' },
      { label: 'Data', href: '#' },
    ],
  },
};

export const WithBackground: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '#' },
      { label: 'Data', href: '#' },
    ],
    variant: 'background',
  },
};

export const WithLine: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '#' },
      { label: 'Data', href: '#' },
    ],
    variant: 'withLine',
  },
};

export const MultipleLinks: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Library', href: '#' },
      { label: 'Library', href: '#' },
      { label: 'Library', href: '#' },
      { label: 'Data', href: '#' },
    ],
  },
};
