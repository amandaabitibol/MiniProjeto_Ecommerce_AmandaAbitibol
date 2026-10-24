// Um item do catálogo da papelaria
export type Produto = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
};

export type Cliente = {
  id: number;
  nome: string;
  email: string;
};

// Item dentro do carrinho: só guarda qual produto e quanto
export type ItemCarrinho = {
  produtoId: number;
  quantidade: number;
};

// Item dentro de um pedido: guarda também o preço da hora da compra
export type ItemPedido = {
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
};

export type Pedido = {
  id: number;
  clienteId: number;
  itens: ItemPedido[];
  total: number;
  data: Date;
};
