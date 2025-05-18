interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  disponivel: boolean;
}

const biblioteca: Livro[] = [
  { titulo: "Véspera", autor: "Carla Madeira", ano: 2022, disponivel: true },
  { titulo: "O Peso do Pássaro Morto", autor: "Aline Bei", ano: 2017, disponivel: false },
  { titulo: "Jurassic Park", autor: "Michael Crichton", ano: 1990, disponivel: true }
];


function listarTitulosDisponiveis(livros: Livro[]): string[] {
  return livros
    .filter(livro => livro.disponivel)
    .map(livro => livro.titulo);
}

console.log(listarTitulosDisponiveis(biblioteca));
