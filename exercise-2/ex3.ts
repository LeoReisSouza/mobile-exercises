interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

type UsuarioSemSenha = Omit<Usuario, "senha">;
type UsuarioAtualizacao = Partial<Usuario>;

function exibirPerfil(u: UsuarioSemSenha): void {
  console.log("Perfil do Usuário:", u);
}

function atualizarUsuario(id: number, dados: UsuarioAtualizacao): void {
  console.log(`Atualizando usuário ${id} com os dados:`, dados);
}

// Testes
const usuario: Usuario = { id: 1, nome: "Marta", email: "marta@email.com", senha: "123456" };
exibirPerfil({ id: usuario.id, nome: usuario.nome, email: usuario.email });
atualizarUsuario(1, { email: "novo@email.com" });
