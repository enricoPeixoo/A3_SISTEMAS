import { openDb } from "../configDB.js";

//Função para a criação da tabela Pedidos
export async function createTablePedidos() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Pedido ( id_pedido INTEGER PRIMARY KEY, id_cliente INT, id_produto INT, quantidade_pedido INT, total_pedido FLOAT, FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente), FOREIGN KEY (id_produto) REFERENCES produto(id_produto))')
  })
}

//Função para o pedido de compra
export async function insertPedido(req, res) {
  let pedido = req.body
  openDb().then(db => {
    db.run('INSERT INTO Pedido (id_cliente, id_produto, quantidade_pedido, total_pedido) VALUES (?,?,?,?)', [pedido.id_cliente, pedido.id_produto, pedido.quantidade_pedido, pedido.total_pedido])
    db.run('UPDATE Produto SET quantidade_produto= quantidade_produto - ? WHERE id_produto = ? ', [pedido.quantidade_pedido, pedido.id_produto])
  })
  res.json({
    "statusCode": 200
  })
}

//Funcão para ordenar os produtos mais vendidos
export async function produtosMaisVendidos(req, res) {
  openDb().then(db => {
    db.all(`
    SELECT p.id_produto, p.nome_produto, SUM(pe.quantidade_pedido) as total_vendido
    FROM Pedido pe
    JOIN Produto p ON pe.id_produto = p.id_produto
    GROUP BY pe.id_produto
    ORDER BY total_vendido DESC;
  `)
      .then(produto => res.json(produto))
  })
}







