import { Cliente, Resultado } from "./types";

// Clientes iniciais para facilitar os testes (o enunciado pede pelo menos 3)
const clientes: Cliente[] = [
  { id: 1, nome: "Mariana Souza", email: "mariana.souza@email.com" },
  { id: 2, nome: "João Pereira", email: "joao.pereira@email.com" },
  { id: 3, nome: "Camila Ferreira", email: "camila.ferreira@email.com" },
];

// Procura um cliente pelo id. Se não achar, devolve undefined (nada).
export function buscarClientePorId(id: number): Cliente | undefined {
  for (const cliente of clientes) {
    if (cliente.id === id) {
      return cliente;
    }
  }
  return undefined;
}

// Responde true (sim) ou false (não): esse e-mail já existe na lista?
function emailJaCadastrado(email: string): boolean {
  for (const cliente of clientes) {
    if (cliente.email === email) {
      return true;
    }
  }
  return false;
}

export function cadastrarCliente(cliente: Cliente): Resultado {
  if (cliente.nome === "") {
        return { sucesso: false, mensagem: "Erro: o nome do cliente deve ser informado." };
  }
  if (cliente.email === "") {
    return { sucesso: false, mensagem: "Erro: o e-mail do cliente deve ser informado." };
  }
  if (buscarClientePorId(cliente.id) !== undefined) {
    return { sucesso: false, mensagem: "Erro: já existe um cliente com o id " + cliente.id + "." };
  }
  if (emailJaCadastrado(cliente.email) === true) {
    return { sucesso: false, mensagem: "Erro: já existe um cliente com o e-mail " + cliente.email + "." };
  }

  clientes.push(cliente);
  return { sucesso: true, mensagem: "Cliente cadastrado com sucesso!" };
}

export function listarClientes(): Cliente[] {
  return clientes;
}