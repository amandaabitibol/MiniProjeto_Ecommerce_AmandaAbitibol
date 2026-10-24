import { listarProdutos, buscarProdutoPorId, cadastrarProduto } from "./produtos";

console.log("=== Busca por id 2 ===");
console.log(buscarProdutoPorId(2));

console.log("=== Cadastrando produto novo ===");
let resultado = cadastrarProduto({
    id: 6,
    nome: "Washi Tape Aquarela",
    categoria: "Decoração",
    preco: 12.5,
    estoque: 40,
});
console.log(resultado.mensagem);

console.log("=== Teste inválido: preço negativo ===");
resultado = cadastrarProduto({
    id: 7,
    nome: "Caneta Fantasma",
    categoria: "Canetas",
    preco: -5,
    estoque: 10,
});
console.log(resultado.mensagem);

console.log("=== Teste inválido: id repetido ===");
resultado = cadastrarProduto({
    id: 1,
    nome: "Repetido",
    categoria: "Cadernos",
    preco: 10,
    estoque: 5,
});
console.log(resultado.mensagem);

console.log("=== Lista de Produtos ===");
console.log(listarProdutos());
