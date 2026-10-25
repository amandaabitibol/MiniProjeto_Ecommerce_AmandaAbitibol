import { ItemCarrinho, Resultado } from "./types";
import {buscarProdutoPorId} from "./produtos";

//O carrinho começa vazio 
let carrinho: ItemCarrinho[] = [];

//Adiciona um produto (se já estiver no carrinho, soma a quantidade)
export function adicionarAoCarrinho(produtoId: number, quantidade: number): Resultado {
    if (quantidade <= 0) {
        return { sucesso: false, mensagem: "Erro: a quantidade deve ser mairo que zero." };
    }

    const produto = buscarProdutoPorId(produtoId);
    if (produto === undefined) {
        return { sucesso: false, mensagem: "Erro: produto não encontrado." };
    }

 // Esse produto já está no carrinho? Então só soma a quantidade.
  for (const item of carrinho) {
    if (item.produtoId === produtoId) {
      const novaQuantidade = item.quantidade + quantidade;
      if (novaQuantidade > produto.estoque) {
        return { sucesso: false, mensagem: "Erro: quantidade maior que o estoque disponível." };
      }
      item.quantidade = novaQuantidade;
      return { sucesso: true, mensagem: "Quantidade atualizada no carrinho." };
    }
  }


// Produto novo no carrinho
  if (quantidade > produto.estoque) {
    return { sucesso: false, mensagem: "Erro: quantidade maior que o estoque disponível." };
  }
  carrinho.push({ produtoId: produtoId, quantidade: quantidade });
  return { sucesso: true, mensagem: "Produto adicionado ao carrinho." };
}

// Tira um produto do carrinho
export function removerDoCarrinho(produtoId: number): Resultado {
    return { sucesso: false, mensagem: "A fazer" };
}

//Troca a quantidade de um produto que já está no carrinho
export function alterarQuantidade(produtoId: number, novaQuantidade: number): Resultado {
    return { sucesso: false, mensagem: "A fazer" };
}

export function listarCarrinho(): ItemCarrinho[] {
    return carrinho;
}

//Preço do produto x quantidade
export function calcularSubtotal(item: ItemCarrinho): number {
    return 0
}

//Soma de todos os subtotais
export function calcularTotal(): number {
    return 0;
}
