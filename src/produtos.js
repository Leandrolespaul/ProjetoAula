const { idAutomaticoProdutos } = require("./util.js");

let produtos = [
  {
    id: idAutomaticoProdutos(),
    descricao: "Coca-cola",
    preco: 12,
  },
  {
    id: idAutomaticoProdutos(),
    descricao: "Picanha, FAZ A DESGRAÇA DO L",
    preco: 68.9,
  },
  {
    id: idAutomaticoProdutos(),
    descricao: "Fanta",
    preco: 5,
  },
  {
    id: idAutomaticoProdutos(),
    descricao: "Miojo",
    preco: 1.29,
  },
  {
    id: idAutomaticoProdutos(),
    descricao: "arroz",
    preco: 25,
  },
];

exports.produtos = produtos;
