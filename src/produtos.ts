import { Produto, Resultado } from "./types";

// Lista de produtos: começa vazia.
const produtos: Produto[] = [
    {id: 1, nome: "Caderno Argolado Floral", categoria: "Cadernos", preco: 39.9, estoque: 20},
    {id: 2, nome: "Caneta Gel Pastel (kit 6)", categoria: "Canetas", preco: 24.9, estoque: 35},
    {id: 3, nome: "Planner Semanal 2027", categoria: "Organização", preco: 49.9, estoque: 15},
    {id: 4, nome: "Adesivos Fofos (cartela)", categoria: "Decoração", preco: 8.5, estoque: 60},
    {id: 5, nome: "Caderno Pontilhado A5", categoria: "Cadernos", preco: 34.9, estoque: 12},
];

// Procura um produto pelo id
export function buscarProdutoPorId(id: number): Produto | undefined {
    for (const produto of produtos) {
        if (produto.id === id) {
            return produto;
        }
    }
  return undefined;
}

// Cadastra um novo produto 
export function cadastrarProduto(produto: Produto): Resultado {
    if (buscarProdutoPorId(produto.id) !== undefined) {
        return {sucesso: false, mensagem: "Erro: já existe um produto com esse id."};
    }
    if (produto.nome === "") {
        return {sucesso: false, mensagem: "Erro: o nome não pode estar vazio."};
    }
    if (produto.preco <= 0) {
        return { sucesso: false, mensagem: "Erro: o preço deve ser maior que zero." };
    }
    if (produto.estoque < 0) {
        return {sucesso: false, mensagem: "Erro: o estoque não pode ser negativo." };
    }

    produtos.push(produto);
    return { sucesso: true, mensagem: "Produto cadastrado com sucesso!" };
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
    const resultado: Produto[] = [];

    for (const produto of produtos) {
        if (produto.categoria === categoria) {
            resultado.push(produto);
        }
    }
    return resultado;
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