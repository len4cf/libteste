import { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';
import { useArgs } from '@storybook/preview-api';
import { ComponentProps } from 'react';
import {
  Canvas,
  Controls,
  Description,
  Stories,
  Title,
} from '@storybook/blocks';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  globals: {
    backgrounds: { value: 'black', grid: false },
  },
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
              Esse componente normalmente é inserido e usado em headers na parte
              superior da página
            </li>
            <li>
              Para filtros e componentes complexos que necessitam de search bar,
              como tabelas
            </li>
            <li>
              A barra de pesquisa pode ser aplicada em 100% da largura da
              página, respeitando sempre os espaçamentos, a sidebar e o grid
              estabelecido.
            </li>
          </ul>
          <Stories />
        </>
      ),
      description: {
        component:
          'A barra de pesquisa facilita a busca por palavras ou frases específicas, com objetivo de encontrar partes relevantes do conteúdo.',
      },
    },
  },
  argTypes: {
    barColor: {
      control: {
        type: 'radio',
      },
      options: ['white', 'grey'],
      description: 'Cor da barra de pesquisa',
    },
    searchTerm: {
      control: { type: 'text', disable: true },
      description: 'Texto a ser pesquisado',
    },
    onSearchChange: {
      action: 'searchChanged',
      description: 'Função chamada quando o texto de pesquisa é alterado',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Search>;
type SearchProps = ComponentProps<typeof Search>;

const InteractiveTemplate = (args: SearchProps) => {
  const [, updateArgs] = useArgs();

  const handleSearchChange = (newValue: string) => {
    updateArgs({ searchTerm: newValue });
  };

  return <Search {...args} onSearchChange={handleSearchChange} />;
};

export const White: Story = {
  render: InteractiveTemplate,
  args: {
    barColor: 'white',
    searchTerm: '',
  },
};

export const Grey: Story = {
  render: InteractiveTemplate,
  globals: {
    backgrounds: { value: 'white', grid: false },
  },
  args: {
    barColor: 'grey',
    searchTerm: '',
  },
};
