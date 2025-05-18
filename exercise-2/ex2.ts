type Sucesso = { tipo: "sucesso"; dados: string[] };
type Erro = { tipo: "erro"; mensagem: string };
type Resultado = Sucesso | Erro;

function exibirResultado(r: Resultado): void {
  if (r.tipo === "sucesso") {
    console.log("Dados:", r.dados.join(", "));
  } else {
    console.log("Erro:", r.mensagem);
  }
}

// Testes
exibirResultado({ tipo: "sucesso", dados: ["Item1", "Item2"] });
exibirResultado({ tipo: "erro", mensagem: "Algo deu errado" });
