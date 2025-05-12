import { unique, groupBy, sumBy } from './arrayUtils.js';

// Demonstração da função unique
console.log('unique([1, 2, 2, 3, 3, 3]):', unique([1, 2, 2, 3, 3, 3]));
console.log('unique(["a", "b", "a", "c", "b"]):', unique(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]

// Demonstração da função groupBy
const produtos = [
  { nome: 'Notebook', categoria: 'Eletrônicos' },
  { nome: 'Camiseta', categoria: 'Vestuário' },
  { nome: 'Smartphone', categoria: 'Eletrônicos' },
  { nome: 'Calça', categoria: 'Vestuário' }
];
console.log('Agrupamento por categoria:', groupBy(produtos, 'categoria'));

const pessoas = [
    { nome: 'Guilherme', idade: 19 },
    { nome: 'Leonardo', idade: 30 },
    { nome: 'Lucas', idade: 27 }
];
console.log('Agrupamento por idade:', groupBy(pessoas, 'idade'));

// Demonstração da função sumBy
const vendas = [
  { produto: 'Notebook', valor: 2500 },
  { produto: 'Mouse', valor: 150 },
  { produto: 'Teclado', valor: 300 }
];
console.log('Soma dos valores:', sumBy(vendas, 'valor')); // 2950

const despesas = [
  { descricao: 'Aluguel', valor: 1200 },
  { descricao: 'Energia', valor: 200 },
  { descricao: 'Internet', valor: 100 }
];
console.log('Total de despesas:', sumBy(despesas, 'valor')); // 1500