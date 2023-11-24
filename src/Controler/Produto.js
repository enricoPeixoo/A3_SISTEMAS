import { openDb } from "../configDB.js";

export async function createTable() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Produto ( id INTEGER PRIMARY KEY, nome TEXT, valor FLOAT, quantidade INT)')
  })
}

export async function insertProduto(produto) {
  openDb().then(db => {
    db.run('INSERT INTO Produto (nome, valor, quantidade) VALUES (?,?,?)', [produto.nome, produto.valor, produto.quantidade])
  })
}

export async function updateProduto(produto) {
  openDb().then(db => {
    db.run('UPDATE Produto SET nome=?, valor=?, quantidade=? WHERE id=?', [produto.nome, produto.valor, produto.quantidade, produto.id])
  })
}

export async function selectProdutos() {
  return openDb().then(db => {
    return db.all('SELECT * FROM Produto')
      .then(res => res)
  })
}

export async function selectProduto(id) {
  return openDb().then(db => {
    return db.get('SELECT * FROM Produto WHERE id=?', [id])
      .then(res => res)
  })
}

export async function deleteProduto(id) {
  return openDb().then(db => {
    return db.get('DELETE FROM Produto WHERE id=?', [id])
      .then(res => res)
  })
}



