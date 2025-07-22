import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta = {
  title: 'Components/Alert',
  component: Alert,
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
            <li>
              Use Alertas com moderação, especialmente Alertas de aviso e de
              erro, pois eles são persistentes e atrapalham o fluxo de trabalho
              do usuário
            </li>
            <li>
              Certifique-se de que as principais informações acionáveis
              ​​estejam visíveis rapidamente
            </li>
            <li>
              Seja sempre claro, conciso e, sempre que possível, dê ações de
              acompanhamento para permitir que o usuário fique mais informado ou
              resolva o problema
            </li>
            <li>
              A experiência da pessoa usuária deve ser fluida, então evite
              interrompê-la com alertas.
            </li>
          </ul>
          <h3>Boas práticas</h3>
          <ul>
            <li>
              Use Alertas com moderação, especialmente Alertas de aviso e de
              erro, pois eles são persistentes e atrapalham o fluxo de trabalho
              do usuário
            </li>
            <li>
              Certifique-se de que as principais informações acionáveis
              ​​estejam visíveis rapidamente
            </li>
            <li>
              Seja sempre claro, conciso e, sempre que possível, dê ações de
              acompanhamento para permitir que o usuário fique mais informado ou
              resolva o problema
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'Os Alertas mostram uma mensagem curta e importante. Eles atraem a atenção da pessoa usuária sem interromper a ação que ela está realizando no momento.',
      },
    },
  },
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['white', 'dark', 'light'],
      if: { arg: 'variant', eq: 'success' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['success', 'danger', 'warning', 'info'],
    },
    icon: {
      control: { disable: true },
    },
    close: {
      control: { disable: true },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    title: 'This is a success alert-check it out!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec interdum porta nibh non pretium.',
    variant: 'success',
    color: 'white',
    linkText: 'Link text',
    href: '#',
  },
};

export const Danger: Story = {
  args: {
    title: 'This is a danger alert-check it out!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec interdum porta nibh non pretium.',
    variant: 'danger',
    linkText: 'Link text',
    href: '#',
  },
};

export const Warning: Story = {
  args: {
    title: 'This is a warning alert-check it out!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec interdum porta nibh non pretium.',
    variant: 'warning',
    linkText: 'Link text',
    href: '#',
  },
};

export const Info: Story = {
  args: {
    title: 'This is a info alert-check it out!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec interdum porta nibh non pretium.',
    variant: 'info',
    linkText: 'Link text',
    href: '#',
  },
};

export const DarkAlert: Story = {
  args: {
    title: 'This is a dark alert-check it out!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec interdum porta nibh non pretium.',
    variant: 'success',
    linkText: 'Link text',
    href: '#',
    color: 'dark',
  },
};

export const LightAlert: Story = {
  args: {
    title: 'This is a dark alert-check it out!',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Donec interdum porta nibh non pretium.',
    variant: 'success',
    linkText: 'Link text',
    href: '#',
    color: 'light',
  },
};
