"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarProdutoPorId = buscarProdutoPorId;
exports.cadastrarProduto = cadastrarProduto;
exports.listarProdutos = listarProdutos;
exports.buscarProdutosPorNome = buscarProdutosPorNome;
exports.filtrarPorCategoria = filtrarPorCategoria;
exports.atualizarProduto = atualizarProduto;
exports.removerProduto = removerProduto;
// Lista de produtos: começa vazia.
const produtos = [];
// Procura um produto pelo id
function buscarProdutoPorId(id) {
    return undefined;
}
// Cadastra um novo produto 
function cadastrarProduto(produto) {
    return { sucesso: false, mensagem: "A fazer" };
}
function listarProdutos() {
    return produtos;
}
// Procura produtos pelo nome (ou parte dele)
function buscarProdutosPorNome(trecho) {
    return [];
}
// Lista só os produtos de uma categoria
function filtrarPorCategoria(categoria) {
    return [];
}
// Altera os dados de um produto
function atualizarProduto(id, nome, categoria, preco, estoque) {
    return { sucesso: false, mensagem: "A fazer" };
}
// Remove um produto (só se o estoque estiver zerado)
function removerProduto(id) {
    return { sucesso: false, mensagem: "A fazer" };
}
