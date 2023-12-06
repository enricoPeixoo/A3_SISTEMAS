import { openDb } from "../configDB.js";

export async function createTable() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Produto ( id_produto INTEGER PRIMARY KEY, nome_produto TEXT, valor_produto FLOAT, quantidade_produto INT)')
  })
}

export async function insertProduto(req, res) {
  let produto = req.body
  openDb().then(db => {
    db.run('INSERT INTO Produto (nome_produto, valor_produto, quantidade_produto) VALUES (?,?,?)', [produto.nome_produto, produto.valor_produto, produto.quantidade_produto])
  })
  res.json({
    "statusCode": 200
  })
}

export async function updateProduto(req, res) {
  let produto = req.body
  openDb().then(db => {
    db.run('UPDATE Produto SET nome_produto=?, valor_produto=?, quantidade_produto=? WHERE id_produto=?', [produto.nome_produto, produto.valor_produto, produto.quantidade_produto, produto.id_produto])
  })
  res.json({
    "statusCode": 200
  })
}

export async function selectProdutos(req, res) {
  openDb().then(db => {
   db.all('SELECT * FROM Produto')
      .then(produtos => res.json(produtos))
  })
}

export async function selectProduto(req, res) {
  let id = req.body.id_produto
  openDb().then(db => {
    db.get('SELECT * FROM Produto WHERE id_produto=?', [id])
      .then(produto => res.json(produto))
  })
}

export async function deleteProduto(req, res) {
  let id = req.body.id_produto
  openDb().then(db => {
    db.get('DELETE FROM Produto WHERE id_produto=?', [id])
      .then(produto => res.json(produto))
  })
  res.json({
    "statusCode": 200
  })
}



