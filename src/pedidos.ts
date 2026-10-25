import { ItemPedido, Pedido, Resultado } from "./types";
import { buscarProdutoPorId } from "./produtos";
import { buscarClientePorId } from "./clientes";
import { listarCarrinho, limparCarrinho } from "./carrinho";

//Lista de pedidos registrados (começa vazia)
const pedidos: Pedido[] = [];
let proximoId = 1;

export function finalizarPedido(clienteId: number): Resultado {
    //1) O cliente existe?
    if (buscarClientePorId(clienteId) === undefined) {
        return { sucesso: false, mensagem: "Erro: cliente não encontrado." };
    }

    //2) O carrinho tem pelo menos um item?
    const itensCarrinho = listarCarrinho();
    let temItens = false;
    for (const item of itensCarrinho) {
        temItens = true;
    }
    if (temItens === false) {
        return { sucesso: false, mensagem: "Erro: o carrinho está vazio." };
    }

    //3)Todos os itens têm estoque? Só confere, ainda não muda nada.
    for (const item of itensCarrinho) {
        const produto = buscarProdutoPorId(item.produtoId);
        if (produto === undefined) {
            return { sucesso: false, mensagem: "Erro: um produto do carrinho não existe mais." };
        }
        if (item.quantidade > produto.estoque) {
            return { sucesso: false, mensagem: "Erro: estoque insuficiente para " + produto.nome + "."};
        }
    }

    // 4) Tudo certo: monta os itens do pedido com o preço de agora e soma o total
    const itensPedido: ItemPedido[] = [];
    let total = 0;
    for (const item of itensCarrinho) {
        const produto = buscarProdutoPorId(item.produtoId);
        if (produto !== undefined) {
            itensPedido.push({
                produtoId: item.produtoId,
                quantidade: item.quantidade,
                precoUnitario: produto.preco,
            })
            total = total + produto.preco * item.quantidade;
        }
    }
    
    //5) Baixa o estoque 
    for (const item of itensPedido) {
        const produto = buscarProdutoPorId(item.produtoId);
        if (produto !== undefined) {
            produto.estoque = produto.estoque - item.quantidade;
        }
    }

    //6) Registra o pedido e esvazia o carrinho
    const pedido: Pedido = {
        id: proximoId,
        clienteId: clienteId,
        itens: itensPedido,
        total: total,
        data: new Date(),
    };
    pedidos.push(pedido);
    proximoId = proximoId + 1;
    limparCarrinho();

    return { sucesso: true, mensagem: "Pedido " + pedido.id + " finalizado com sucesso. Total: R$ " + total };
}

export function listarPedidos(): Pedido[] {
    return pedidos;
}

// Devolve só os pedidos de um cliente
export function listarPedidosPorCliente(clienteId: number): Pedido[] {
  const resultado: Pedido[] = [];

  for (const pedido of pedidos) {
    if (pedido.clienteId === clienteId) {
      resultado.push(pedido);
    }
  }
  return resultado;
}