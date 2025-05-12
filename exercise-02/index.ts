import { unique, groupBy, sumBy } from './arrayUtils';

// Exemplos para unique
console.log('unique([1, 2, 2, 3, 3, 3]):', unique([1, 2, 2, 3, 3, 3]));
console.log('unique(["a", "b", "a", "c", "b"]):', unique(["a", "b", "a", "c", "b"]));

// Exemplos para groupBy
interface Produto {
  nome: string;
  categoria: string;
}

const produtos: Produto[] = [
  { nome: 'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Camiseta', categoria: 'Vestuário' },
  { nome: 'Smartphone', categoria: 'Eletrônicos' },
  { nome: 'Calça', categoria: 'Vestuário' }
];
console.log('Agrupamento por categoria:', groupBy(produtos, 'categoria'));

interface Pessoa {
  nome: string;
  idade: number;
}

const pessoas: Pessoa[] = [
  { nome: 'Guilherme', idade: 19 },
  { nome: 'Leonardo', idade: 30 },
  { nome: 'Lucas', idade: 27 }
];
console.log('Agrupamento por idade:', groupBy(pessoas, 'idade'));

interface Venda {
  produto: string;
  valor: number;
}

const vendas: Venda[] = [
  { produto: 'Notebook', valor: 2500 },
  { produto: 'Mouse', valor: 150 },
  { produto: 'Teclado', valor: 300 }
];
console.log('Soma dos valores:', sumBy(vendas, 'valor'));

interface Despesa {
  descricao: string;
  valor: number;
}

const despesas: Despesa[] = [
  { descricao: 'Aluguel', valor: 1200 },
  { descricao: 'Energia', valor: 200 },
  { descricao: 'Internet', valor: 100 }
];
console.log('Total de despesas:', sumBy(despesas, 'valor'));