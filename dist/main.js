"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_1 = require("./produtos");
console.log("=== Busca por id 2 ===");
console.log((0, produtos_1.buscarProdutoPorId)(2));
console.log("=== Cadastrando produto novo ===");
let resultado = (0, produtos_1.cadastrarProduto)({
    id: 6,
    nome: "Washi Tape Aquarela",
    categoria: "Decoração",
    preco: 12.5,
    estoque: 40,
});
console.log(resultado.mensagem);
console.log("=== Teste inválido: preço negativo ===");
resultado = (0, produtos_1.cadastrarProduto)({
    id: 7,
    nome: "Caneta Fantasma",
    categoria: "Canetas",
    preco: -5,
    estoque: 10,
});
console.log(resultado.mensagem);
console.log("=== Teste inválido: id repetido ===");
resultado = (0, produtos_1.cadastrarProduto)({
    id: 1,
    nome: "Repetido",
    categoria: "Cadernos",
    preco: 10,
    estoque: 5,
});
console.log(resultado.mensagem);
console.log("=== Lista de Produtos ===");
console.log((0, produtos_1.listarProdutos)());
