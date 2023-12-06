import { openDb } from "../configDB.js";

//Função para a criação da tabela Produto
export async function createTable() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Produto ( id_produto INTEGER PRIMARY KEY, nome_produto TEXT, valor_produto FLOAT, quantidade_produto INT)')
  })
}

//Função para a criação de um novo produto
export async function insertProduto(req, res) {
  let produto = req.body
  openDb().then(db => {
    db.run('INSERT INTO Produto (nome_produto, valor_produto, quantidade_produto) VALUES (?,?,?)', [produto.nome_produto, produto.valor_produto, produto.quantidade_produto])
  })
  res.json({
    "statusCode": 200
  })
}

//Função para a edição de um produto existente a partir do ID
export async function updateProduto(req, res) {
  let produto = req.body
  openDb().then(db => {
    db.run('UPDATE Produto SET nome_produto=?, valor_produto=?, quantidade_produto=? WHERE id_produto=?', [produto.nome_produto, produto.valor_produto, produto.quantidade_produto, produto.id_produto])
  })
  res.json({
    "statusCode": 200
  })
}

//Função para visualizar todos os produtos cadastrados
export async function selectProdutos(req, res) {
  openDb().then(db => {
   db.all('SELECT * FROM Produto')
      .then(produtos => res.json(produtos))
  })
}

//Função para visualizar UM produto cadastrado a partir do ID
export async function selectProduto(req, res) {
  let id = req.body.id_produto
  openDb().then(db => {
    db.get('SELECT * FROM Produto WHERE id_produto=?', [id])
      .then(produto => res.json(produto))
  })
}

//Função para deletar um produto a partir do ID
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

//Função para exibir produtos com baixo estoque
export async function selectProdutosBaixaQuantidade(req, res) {
  openDb().then(db => {
    db.all('SELECT * FROM Produto WHERE quantidade_produto <= 3')
      .then(produtos => res.json(produtos))
  })
}



