import {
  listarProdutos,
  buscarProdutoPorId,
  buscarProdutosPorNome,
  filtrarPorCategoria,
  cadastrarProduto,
  atualizarProduto,
  removerProduto,
} from "./produtos";

import { adicionarAoCarrinho, listarCarrinho, removerDoCarrinho, alterarQuantidade, calcularSubtotal, calcularTotal } from "./carrinho";

import { finalizarPedido, listarPedidos, listarPedidosPorCliente } from "./pedidos";

import { listarClientes, buscarClientePorId, cadastrarCliente } from "./clientes";

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

console.log("");
console.log("=== CARRINHO ===");

console.log("--- Adicionando 2 unidades do produto 1 ---");
resultado = adicionarAoCarrinho(1, 2);
console.log(resultado.mensagem);

console.log(" --- Adicionando mais 3 unidades do produto 1 ---");
resultado = adicionarAoCarrinho(1, 3)
console.log(resultado.mensagem);

console.log(" --- Adicionando 1 unidade do produto 3 ---");
resultado = adicionarAoCarrinho(3, 1);
console.log(resultado.mensagem);

console.log(" --- Teste inválido: quantidade zero ---");
resultado = adicionarAoCarrinho(2, 0);
console.log(resultado.mensagem);

console.log(" --- Teste inválido: produto que não existe ---");
resultado = adicionarAoCarrinho(99, 1);
console.log(resultado.mensagem);

console.log("--- Teste inválido: quantidade maior que o estoque ---");
resultado = adicionarAoCarrinho(5, 100);
console.log(resultado.mensagem);

console.log(" --- Itens do carrinho ---");
console.log(listarCarrinho());

console.log("--- Alterando a quantidade do produto 1 para 2 ---");
resultado = alterarQuantidade(1, 2);
console.log(resultado.mensagem);

console.log("--- Teste inválido: alterar produto que não está no carrinho ---");
resultado = alterarQuantidade(4, 3);
console.log(resultado.mensagem);

console.log("--- Removendo o produto 3 do carrinho ---");
resultado = removerDoCarrinho(3);
console.log(resultado.mensagem);

console.log("--- Teste inválido: remover produto que não está no carrinho ---");
resultado = removerDoCarrinho(3);
console.log(resultado.mensagem);

console.log("--- Carrinho depois das mudanças ---");
console.log(listarCarrinho());

console.log("--- Adicionando 4 unidades do produto 4 ---");
resultado = adicionarAoCarrinho(4, 4);
console.log(resultado.mensagem);

console.log("--- Subtotal de cada item ---");
for (const item of listarCarrinho()) {
  console.log("Produto " + item.produtoId + " x " + item.quantidade + " = R$ " + calcularSubtotal(item));
}

console.log("--- Total da compra ---");
console.log("R$ " + calcularTotal());

console.log("");
console.log("=== PEDIDOS ===");

console.log("--- Teste inválido: cliente que não existe ---");
resultado = finalizarPedido(99);
console.log(resultado.mensagem);

console.log("--- Produto 1 ANTES do pedido ---");
console.log(buscarProdutoPorId(1));

console.log("--- Finalizando o pedido do cliente 1 ---");
resultado = finalizarPedido(1);
console.log(resultado.mensagem);

console.log("--- Produto 1 DEPOIS do pedido ---");
console.log(buscarProdutoPorId(1));

console.log("--- Teste inválido: finalizar com o carrinho vazio ---");
resultado = finalizarPedido(1);
console.log(resultado.mensagem);

console.log("--- Pedidos registrados ---");
console.log(listarPedidos());

console.log("--- Pedidos do cliente 1 ---");
console.log(listarPedidosPorCliente(1));

console.log("--- Pedidos do cliente 2 (ainda não comprou) ---");
console.log(listarPedidosPorCliente(2));

console.log("--- Teste: estoque insuficiente (não pode registrar pela metade) ---");
adicionarAoCarrinho(3, 1);
adicionarAoCarrinho(5, 10);
atualizarProduto(5, "Caderno Pontilhado A5", "Cadernos", 34.9, 5);
resultado = finalizarPedido(2);
console.log(resultado.mensagem);

console.log("--- Produto 3 continua com o estoque 15? ---");
console.log(buscarProdutoPorId(3));

console.log("--- Pedidos registrados (deve continuar só 1) ---");
console.log(listarPedidos());

console.log("");
console.log("=== CLIENTES ===");

console.log("--- Lista de clientes ---");
console.log(listarClientes());

console.log("--- Busca de cliente por id 2 ---");
console.log(buscarClientePorId(2));

console.log("--- Cadastrando novo cliente ---");
resultado = cadastrarCliente({ id: 4, nome: "Beatriz Lima", email: "beatriz.lima@email.com" });
console.log(resultado.mensagem);

console.log("--- Teste inválido: e-mail repetido ---");
resultado = cadastrarCliente({ id: 5, nome: "Outra Pessoa", email: "mariana.souza@email.com" });
console.log(resultado.mensagem);

console.log("--- Teste inválido: id repetido ---");
resultado = cadastrarCliente({ id: 1, nome: "Repetida", email: "repetida@email.com" });
console.log(resultado.mensagem);

console.log("--- Teste inválido: nome vazio ---");
resultado = cadastrarCliente({ id: 6, nome: "", email: "semnome@email.com"});
console.log(resultado.mensagem);

