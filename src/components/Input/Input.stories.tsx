import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import React from 'react';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

// Definindo os tipos explicitamente para forçar o Storybook a reconhecer
type InputStoryArgs = {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  label?: string;
  required?: boolean;
  validation?: 'error' | 'success';
  icon?: React.ReactNode;
  iconPosition: 'left' | 'right';
  disabled?: boolean;
  helperText?: string;
  box?: boolean;
  maxLength?: number;
  showLengthCounter?: boolean;
  className?: string;
};

const meta: Meta<InputStoryArgs> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Canvas />
          <Controls />
          <h3>Quando usar?</h3>
          <p>
            Normalmente, o text input aparece dentro de um formulário para
            solicitar dados fornecidos pela pessoa usuária.
          </p>
          <ul>
            <li>
              Largura: deve ser utilizada com intuito de auxiliar no
              entendimento do dado que é esperado dentro dele;
            </li>
            <li>
              Input label: deve ser um texto curto e direto sobre o dado que se
              espera preencher. Ex.: CPF, nome completo, telefone, razão social;
            </li>
            <li>
              Placeholder text: quando existir, deve auxiliar no preenchimento
              do campo com algum exemplo ou máscara;
            </li>
            <li>
              Helper text: deve ser uma frase curta, utilizando pontuação
              normal, ajudando o usuário a entender a informação esperada.
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'Permite a pessoa usuária interagir e inserir conteúdo e dados. Pode ser usado para entradas de formulário',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      table: { disable: true },
    },
    icon: {
      control: { type: 'boolean' },
      description:
        'Ressalta qual a informação que a pessoa usuária precisa preencher;',
      if: { arg: 'box', truthy: false },
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Position of the icon in the input field',
      if: { arg: 'icon', truthy: true },
    },
    validation: {
      control: { type: 'select' },
      options: ['error', 'success'],
      description:
        'Indica se o campo de entrada está com erro ou sucesso na validação',
    },
    box: {
      control: { type: 'boolean' },
      description: 'Display as textarea instead of input',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o campo de entrada',
    },
    required: {
      table: { disable: true },
    },
    showLengthCounter: {
      control: { type: 'boolean' },
      if: { arg: 'box', truthy: true },
      description: 'Exibe o contador de caracteres',
    },
    maxLength: {
      control: { type: 'number', min: 1, max: 1000 },
      description: 'Maximo número de caracteres permitidos',
    },
    label: {
      control: { type: 'text' },
      description:
        'Informação para o usuário entender o que deve ser preenchido',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Mensagem de suporte a pessoa usuária.',
    },
  } satisfies Meta<InputStoryArgs>['argTypes'],
};

export default meta;
type Story = StoryObj<InputStoryArgs>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: 'input-default',
    label: 'Nome',
    disabled: false,
    icon: <i className='fa-solid fa-user fa-sm' />,
    box: false,
    maxLength: 100,
    showLengthCounter: true,
    helperText: '',
  },
};

export const WithIcon: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: 'input-with-icon',
    label: 'Username',
    icon: <i className='fa-solid fa-user fa-sm' />,
    iconPosition: 'left',
    box: false,
    maxLength: 100,
    showLengthCounter: true,
    disabled: false,
  },
};

export const WithIconRight: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: 'input-with-icon-right',
    label: 'Search',
    icon: <i className='fa-solid fa-search fa-sm' />,
    iconPosition: 'right',
    disabled: false,
    maxLength: 100,
  },
};

export const ValidationError: Story = {
  render: args => {
    const [value, setValue] = React.useState('invalid@');

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: 'input-error',
    label: 'Email',
    validation: 'error',
    helperText: 'Please enter a valid email address',
    icon: <i className='fa-solid fa-envelope fa-sm' />,
    iconPosition: 'left',
  },
};

export const ValidationSuccess: Story = {
  render: args => {
    const [value, setValue] = React.useState('valid@example.com');

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: 'input-success',
    label: 'Email',
    validation: 'success',
    icon: <i className='fa-solid fa-check fa-sm' />,
    iconPosition: 'right',
  },
};

export const Disabled: Story = {
  render: args => {
    const [value, setValue] = React.useState('Disabled value');

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: 'input-disabled',
    label: 'Disabled Input',
    disabled: true,
    helperText: 'This field is disabled',
  },
};

export const TextArea: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: 'input-textarea',
    label: 'Comentários',
    box: true,
    maxLength: 300,
    showLengthCounter: true,
    helperText: 'Escreva seus comentários aqui',
  },
};

export const TextAreaWithoutCounter: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: 'input-textarea-no-counter',
    label: 'Descrição',
    box: true,
    maxLength: 200,
    showLengthCounter: false,
    helperText: 'Descrição sem contador de caracteres',
  },
};

export const InputMaxLength: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    return <Input {...args} value={value} onChange={setValue} />;
  },
  args: {
    id: 'input-max-length',
    label: 'Título',
    maxLength: 20,
    showLengthCounter: true,
    helperText: 'Máximo 20 caracteres',
  },
};
