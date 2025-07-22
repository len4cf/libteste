import { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import * as React from 'react';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Indica o andamento de uma tarefa ou processo em tempo real. Representa um progresso linear e contínuo, como carregamento de dados, envio de arquivos ou conclusão de etapas em um fluxo.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'gradient'],
      description: 'Aplica a variante de cor e estilo ao ProgressBar.',
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
      description: 'Define o tamanho do ProgressBar.',
    },
    value: {
      control: 'number',
      description: 'Valor atual do progresso (0 a 100).',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

// Animação apenas para Storys
const ProgressAnimationWrapper = (args: any) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue(v => {
        if (v >= args.value) {
          clearInterval(interval);
          return args.value;
        }
        return v + 1;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [args.value]);

  return <ProgressBar {...args} value={value} />;
};

export const DefaultVersionState: Story = {
  name: 'Default Progress',
  render: args => <ProgressAnimationWrapper {...args} />,
  args: {
    variant: 'default',
    size: 'regular',
    value: 5,
  },
};

export const GradientVersionState: Story = {
  name: 'Gradient Progress',
  render: args => <ProgressAnimationWrapper {...args} />,
  args: {
    variant: 'gradient',
    size: 'regular',
    value: 10,
  },
};

export const SmallProgress: Story = {
  name: 'Small Progress Bar',
  render: args => <ProgressAnimationWrapper {...args} />,
  args: {
    variant: 'default',
    size: 'small',
    value: 30,
  },
};

export const RegularProgress: Story = {
  name: 'Regular Progress Bar',
  render: args => <ProgressAnimationWrapper {...args} />,
  args: {
    variant: 'default',
    size: 'regular',
    value: 50,
  },
};
export const LargeProgress: Story = {
  name: 'Large Progress Bar',
  render: args => <ProgressAnimationWrapper {...args} />,
  args: {
    variant: 'default',
    size: 'large',
    value: 70,
  },
};
