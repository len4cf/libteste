import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const presetImage = [
  {
    src: 'https://randomuser.me/api/portraits/men/61.jpg',
    fallback: 'HC',
  },
];

type StoryArgs = React.ComponentProps<typeof Avatar> & {
  usePresetImage?: boolean;
};

const meta: Meta<any> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
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
            <li>Para upload de fotos e representação da pessoa usuária.</li>
            <li>
              Em cards onde a imagem é fixa, tais como: alunos, professores,
              gestores etc.
            </li>
            <li>
              Em alguns componentes, tais como: tabelas, formulários, headers
              etc.
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'Atua como referência ou entidade para identificar um usuário. Na PUCPR, utilizamos o avatar circular com foto, logo ou apenas as iniciais do usuário.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'regular', 'large'],
      defaultValue: 'regular',
    },
    logo: {
      control: 'boolean',
      defaultValue: false,
    },
    usePresetImage: {
      control: 'boolean',
      defaultValue: true,
      name: 'image',
    },
    avatarUrl: {
      table: { disable: true },
    },
    notification: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Small: Story = {
  args: {
    size: 'small',
    logo: false,
    usePresetImage: false,
  },
  render: args => (
    <Avatar
      {...args}
      avatarUrl={
        args.usePresetImage ? presetImage : [{ src: '', fallback: 'FN' }]
      }
    />
  ),
};

export const Regular: Story = {
  args: {
    size: 'regular',
    usePresetImage: false,
  },
  render: args => (
    <Avatar
      {...args}
      avatarUrl={
        args.usePresetImage ? presetImage : [{ src: '', fallback: 'FN' }]
      }
    />
  ),
};

export const Large: Story = {
  args: {
    size: 'large',
    usePresetImage: false,
  },
  render: args => (
    <Avatar
      {...args}
      avatarUrl={
        args.usePresetImage ? presetImage : [{ src: '', fallback: 'FN' }]
      }
    />
  ),
};

export const Image: Story = {
  args: {
    size: 'regular',
    logo: false,
    usePresetImage: true,
  },
  render: args => (
    <Avatar
      {...args}
      avatarUrl={
        args.usePresetImage ? presetImage : [{ src: '', fallback: 'FN' }]
      }
    />
  ),
};

export const Logo: Story = {
  args: {
    size: 'regular',
    logo: true,
    usePresetImage: true,
  },
  render: args => <Avatar {...args} />,
};

export const Notification: Story = {
  args: {
    size: 'regular',
    logo: false,
    notification: true,
    usePresetImage: true,
  },
  render: args => (
    <Avatar
      {...args}
      avatarUrl={
        args.usePresetImage ? presetImage : [{ src: '', fallback: 'FN' }]
      }
    />
  ),
};

export const GroupTogether: Story = {
  args: {
    size: 'regular',
    logo: false,
    numPeople: 5,
    group: 'together',
  },
  render: args => (
    <Avatar
      {...args}
      avatarUrl={[
        {
          src: 'https://randomuser.me/api/portraits/men/67.jpg',
          fallback: 'PB',
        },
        { fallback: 'AB' },
        {
          src: 'https://randomuser.me/api/portraits/men/85.jpg',
          fallback: 'FN',
        },
      ]}
    />
  ),
};

export const GroupSeparate: Story = {
  args: {
    size: 'regular',
    logo: false,
    group: 'separate',
  },
  render: args => (
    <Avatar
      {...args}
      avatarUrl={[
        {
          src: 'https://randomuser.me/api/portraits/men/60.jpg',
          fallback: 'AB',
        },
        { fallback: 'TB' },
        {
          src: 'https://randomuser.me/api/portraits/men/66.jpg',
          fallback: 'FN',
        },
        {
          src: 'https://randomuser.me/api/portraits/men/98.jpg',
          fallback: 'FN',
        },
      ]}
    />
  ),
};
