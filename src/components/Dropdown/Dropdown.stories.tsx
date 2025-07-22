import { Dropdown } from './Dropdown';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o dropdown, tornando-o não interativo',
    },
    placeholder: {
      control: { type: 'text' },
      description:
        'Informação para a pessoa usuária entender o que deve ser preenchido',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Mensagem de erro para o usuário',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Mensagem de apoio para o usuário',
    },
    options: {
      description:
        'Lista de opções disponíveis no dropdown, cada opção deve ter um label e um value',
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
              Em formulários, cards e modais: a utilização permite que a pessoa
              usuária selecione uma ou mais opções;
            </li>
            <li>
              {' '}
              Os tipos de entradas mais comuns são: quantidades, locais,
              categorias etc.
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'Utilizado para revelar uma lista de opções ou comandos ocultos. No cabeçalho, é geralmente utilizado para navegação, onde uma ação leva o usuário para outra página.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const Error: Story = {
  args: {
    errorText: 'Error',
    disabled: false,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};

export const Helper: Story = {
  args: {
    helperText: 'Helper',
    disabled: false,
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};
