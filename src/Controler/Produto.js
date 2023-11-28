import { openDb } from "../configDB.js";

export async function createTable() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Produto ( id_produto INTEGER PRIMARY KEY, nome TEXT, valor FLOAT, quantidade INT)')
  })
}

export async function insertProduto(req, res) {
  let produto = req.body
  openDb().then(db => {
    db.run('INSERT INTO Produto (nome, valor, quantidade) VALUES (?,?,?)', [produto.nome, produto.valor, produto.quantidade])
  })
  res.json({
    "statusCode": 200
  })
}

export async function updateProduto(req, res) {
  let produto = req.body
  openDb().then(db => {
    db.run('UPDATE Produto SET nome=?, valor=?, quantidade=? WHERE id_produto=?', [produto.nome, produto.valor, produto.quantidade, produto.id])
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
  let id = req.body.id
  openDb().then(db => {
    db.get('SELECT * FROM Produto WHERE id_produto=?', [id])
      .then(produto => res.json(produto))
  })
}

export async function deleteProduto(req, res) {
  let id = req.body.id
  openDb().then(db => {
    db.get('DELETE FROM Produto WHERE id_produto=?', [id])
      .then(produto => res.json(produto))
  })
  res.json({
    "statusCode": 200
  })
}



