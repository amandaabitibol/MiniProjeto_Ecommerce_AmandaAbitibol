import { Produto, Resultado } from "./types";

// Lista de produtos: começa vazia.
const produtos: Produto[] = [];

// Procura um produto pelo id
export function buscarProdutoPorId(id: number): Produto | undefined {
  return undefined;
}

// Cadastra um novo produto 
export function cadastrarProduto(produto: Produto): Resultado {
  return { sucesso: false, mensagem: "A fazer" };
}

export function listarProdutos(): Produto[] {
  return produtos;
}

// Procura produtos pelo nome (ou parte dele)
export function buscarProdutosPorNome(trecho: string): Produto[] {
  return [];
}

// Lista só os produtos de uma categoria
export function filtrarPorCategoria(categoria: string): Produto[] {
  return [];
}

// Altera os dados de um produto
export function atualizarProduto(
  id: number,
  nome: string,
  categoria: string,
  preco: number,
  estoque: number
): Resultado {
  return { sucesso: false, mensagem: "A fazer" };
}

// Remove um produto (só se o estoque estiver zerado)
export function removerProduto(id: number): Resultado {
  return { sucesso: false, mensagem: "A fazer" };
}