import { Cliente } from "./types";

// Clientes iniciais para facilitar os testes (o enunciado pede pelo menos 3)
const clientes: Cliente[] = [
  { id: 1, nome: "Mariana Souza", email: "mariana.souza@email.com" },
  { id: 2, nome: "João Pereira", email: "joao.pereira@email.com" },
  { id: 3, nome: "Camila Ferreira", email: "camila.ferreira@email.com" },
];

// Procura um cliente pelo id. Se não achar, devolve undefined (nada).
export function buscarClientePorId(id: number): Cliente | undefined {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].id === id) {
      return clientes[i];
    }
  }
  return undefined;
}

// Responde true (sim) ou false (não): esse e-mail já existe na lista?
function emailJaCadastrado(email: string): boolean {
  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].email === email) {
      return true;
    }
  }
  return false;
}

export function cadastrarCliente(cliente: Cliente): boolean {
  if (cliente.nome === "") {
    console.log("Erro: o nome do cliente deve ser informado.");
    return false;
  }
  if (cliente.email === "") {
    console.log("Erro: o e-mail do cliente deve ser informado.");
    return false;
  }
  if (buscarClientePorId(cliente.id) !== undefined) {
    console.log("Erro: já existe um cliente com o id " + cliente.id + ".");
    return false;
  }
  if (emailJaCadastrado(cliente.email) === true) {
    console.log("Erro: já existe um cliente com o e-mail " + cliente.email + ".");
    return false;
  }

  clientes.push(cliente);
  return true;
}

export function listarClientes(): Cliente[] {
  return clientes;
}