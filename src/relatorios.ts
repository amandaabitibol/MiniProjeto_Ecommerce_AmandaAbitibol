import { listarPedidos } from "./pedidos";
import { listarProdutos } from "./produtos";
import { Produto } from "./types";

//Soma o total de todos os pedidos registrados
export function totalVendido(): number {
    return listarPedidos().reduce((soma, pedido) => soma + pedido.total, 0);
}

//Conta quantos pedidos foram feitos
export function quantidadeDePedidos(): number {
    let contador = 0;
    for (const pedido of listarPedidos()) {
        contador = contador + 1;
    }
    return contador; 
}

//Devolve os produtos com estoque menor ou igual ao limite
export function produtosComEstoqueBaixo(limite: number): Produto[] {
    const resultado: Produto[] = [];
    for (const produto of listarProdutos()) {
        if (produto.estoque <= limite) {
            resultado.push(produto);
        }
    }
    return resultado;
}
