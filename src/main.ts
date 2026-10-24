import {
  listarProdutos,
  buscarProdutoPorId,
  buscarProdutosPorNome,
  filtrarPorCategoria,
  cadastrarProduto,
  atualizarProduto,
  removerProduto,
} from "./produtos";

console.log("=== Busca por id 2 ===");
console.log(buscarProdutoPorId(2));

console.log("=== Busca por nome: 'Caderno Argolado Floral' ===");
console.log(buscarProdutosPorNome("Caderno Argolado Floral"));

console.log("=== Categoria Cadernos ===");
console.log(filtrarPorCategoria("Cadernos"));

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

console.log("=== Atualizando o preço do produto 6 ===");
resultado = atualizarProduto(6, "Washi Tape Aquarela", "Decoração", 14.9, 40);
console.log(resultado.mensagem);
console.log(buscarProdutoPorId(6));

console.log("=== Teste inválido: atualizar produto que não existe ===");
resultado = atualizarProduto(99, "Fantasma", "Canetas", 10, 5);
console.log(resultado.mensagem);

console.log("=== Teste inválido: remover produto com estoque ===");
resultado = removerProduto(2);
console.log(resultado.mensagem);

console.log("=== Teste inválido: remover produto que não existe ===");
resultado = removerProduto(99);
console.log(resultado.mensagem);

console.log("=== Zerando o estoque do produto 6 e removendo ===");
atualizarProduto(6, "Washi Tape Aquarela", "Decoração", 14.9, 0);
resultado = removerProduto(6);
console.log(resultado.mensagem);

console.log("=== Lista final de produtos ===");
console.log(listarProdutos());