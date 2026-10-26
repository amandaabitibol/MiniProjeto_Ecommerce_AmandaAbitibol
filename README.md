# Miniprojeto E-commerce: Papelaria Criativa

**Estudante:** Amanda Abitibol
**Turma:** T6
**Curso:** Desenvolvedor Back-End Node. Módulo 1, Semana 07

## Objetivo

Sistema de gerenciamento de uma loja virtual de papelaria criativa, feito em TypeScript e Node.js. Ele administra um catálogo de produtos, cadastra clientes, monta um carrinho de compras e registra pedidos, mantendo o estoque consistente durante a execução. O foco do projeto é a lógica de back-end e a organização do código em módulos. Não há interface gráfica, banco de dados nem pagamento.

## Funcionalidades implementadas

**Produtos:** cadastrar, listar, buscar por id, buscar por nome, filtrar por categoria, atualizar e remover.

**Clientes:** cadastrar, listar e buscar por id.

**Carrinho:** adicionar produto, alterar quantidade, remover produto, listar itens, calcular subtotal de cada item e total da compra.

**Pedidos:** finalizar a compra de um cliente, consultar todos os pedidos e consultar os pedidos de um cliente.

**Relatórios:** total vendido, quantidade de pedidos e produtos com estoque baixo.

## Tecnologias utilizadas

- TypeScript
- Node.js
- npm
- Git e GitHub

Foram usados arrays, condicionais, laços `for...of` e os métodos de array `find`, `filter` e `reduce`.

## Estrutura dos arquivos

```
Miniprojeto_Ecommerce/
├── src/
│   ├── types.ts        tipos: Produto, Cliente, ItemCarrinho, ItemPedido, Pedido, Resultado
│   ├── produtos.ts     cadastro, consulta, atualização e remoção de produtos
│   ├── clientes.ts     cadastro e consulta de clientes
│   ├── carrinho.ts     operações do carrinho e cálculos dos valores
│   ├── pedidos.ts      finalização e consulta de pedidos
│   ├── relatorios.ts   total vendido, quantidade de pedidos e estoque baixo
│   └── main.ts         demonstração das funcionalidades
├── package.json
├── tsconfig.json
└── README.md
```

## Como compilar e executar

1. Instale as dependências (só na primeira vez):

```
npm install
```

2. Compile o TypeScript para JavaScript (os arquivos vão para a pasta `dist`):

```
npm run build
```

3. Execute a aplicação:

```
npm start
```

O `main.ts` demonstra todas as funcionalidades e mostra o resultado no terminal.

## Exemplos das principais operações

```ts
// Cadastrar um produto
const resultado = cadastrarProduto({
  id: 6,
  nome: "Washi Tape Aquarela",
  categoria: "Decoração",
  preco: 12.5,
  estoque: 40,
});
console.log(resultado.mensagem); // Produto cadastrado com sucesso!

// Adicionar ao carrinho e finalizar o pedido
adicionarAoCarrinho(1, 2);
finalizarPedido(1); // Pedido 1 finalizado com sucesso. Total: R$ 79.8
```

As funções de produtos, carrinho e pedidos devolvem um objeto `Resultado`, com `sucesso` (true ou false) e `mensagem`. Quem mostra o texto na tela é apenas o `main.ts`.

## Regras de negócio implementadas

**Produtos**
- O id deve ser único.
- O nome não pode estar vazio.
- O preço deve ser maior que zero.
- O estoque não pode ser negativo.
- Um produto só pode ser removido se o estoque estiver zerado.

**Clientes**
- Nome e e-mail são obrigatórios.
- Id e e-mail não podem se repetir.
- O sistema inicia com 3 clientes cadastrados.

**Carrinho**
- A quantidade deve ser maior que zero.
- Não é possível adicionar produto inexistente.
- A quantidade não pode ser maior que o estoque disponível.
- Se o mesmo produto for adicionado de novo, a quantidade é somada, sem linha duplicada.
- Subtotal = preço × quantidade. O total é a soma dos subtotais.

**Pedidos**
- O cliente precisa existir e o carrinho não pode estar vazio.
- Todos os itens precisam ter estoque suficiente. Se algum item falhar, nada é registrado e nenhum estoque é alterado.
- O pedido guarda o preço do momento da compra, então mudanças futuras no catálogo não alteram pedidos antigos.
- O estoque é reduzido somente depois que o pedido é registrado com sucesso.
- Cada pedido recebe um id único e sequencial, e o carrinho é esvaziado ao final.

## Limitações conhecidas

- Os dados ficam só em memória e se perdem quando o programa termina.
- Existe um único carrinho, que não pertence a um cliente específico. O cliente é informado só na finalização do pedido.
- A busca por nome exige o nome completo, e a busca por nome e por categoria diferencia maiúsculas de minúsculas.
- Os ids de produtos e clientes são informados manualmente no cadastro.
- Valores decimais podem aparecer com muitas casas em alguns cálculos.
- Não há interface gráfica, API, banco de dados, pagamento, frete ou descontos (fora do escopo do projeto).