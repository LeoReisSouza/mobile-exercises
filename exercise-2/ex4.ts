function obterPrimeiro<T>(lista: T[]): T {
  return lista[0];
}

// Testes
const primeirosString = obterPrimeiro(["a", "b", "c"]);
console.log(primeirosString);

const primeirosNumeros = obterPrimeiro([1, 2, 3]);
console.log(primeirosNumeros);

interface Produto {
  nome: string;
  preco: number;
}

const produtos: Produto[] = [
  { nome: "Caneta Bic", preco: 2 },
  { nome: "Lápis Leo&Leo", preco: 1 }
];

const primeiroProduto = obterPrimeiro(produtos);
console.log(primeiroProduto);
