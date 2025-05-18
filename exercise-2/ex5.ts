interface PropsBotao {
  titulo: string;
  ativo?: boolean;
}

function renderizarBotao({ titulo, ativo = true }: PropsBotao): string {
  return ativo ? `[ ${titulo} ]` : `( ${titulo} )`;
}

// Testes
console.log(renderizarBotao({ titulo: "Salvar" }));
console.log(renderizarBotao({ titulo: "Cancelar", ativo: false }));
