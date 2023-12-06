import { openDb } from "../configDB.js";

//Função para a criação da tabela Cliente
export async function createTableCliente() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Cliente ( id_cliente INTEGER PRIMARY KEY, nome_cliente TEXT)')
  })
}

//Função para a criação de um novo cliente
export async function insertCliente(req, res) {
  let cliente = req.body
  openDb().then(db => {
    db.run('INSERT INTO Cliente (nome_cliente) VALUES (?)', [cliente.nome_cliente])
  })
  res.json({
    "statusCode": 200
  })
}

//Função para visualizar todos os clientes cadastrados
export async function selectClientes(req, res) {
  openDb().then(db => {
    db.all('SELECT * FROM Cliente')
      .then(clientes => res.json(clientes))
  })
}

//Função para a visualização de UM cliente a partir do ID
export async function selectCliente(req, res) {
  let id = req.body.id_cliente
  openDb().then(db => {
    db.get('SELECT * FROM Cliente WHERE id_cliente=?', [id])
      .then(cliente => res.json(cliente))
  })
}

//Função para a edição de um cliente a partir do ID
export async function updateCliente(req, res) {
  let cliente = req.body
  openDb().then(db => {
    db.run('UPDATE Cliente SET nome_cliente=? WHERE id_cliente=?', [cliente.nome_cliente, cliente.id_cliente])
  })
  res.json({
    "statusCode": 200
  })
}

//Função para deletar um cliente cadastrado a partir do ID
export async function deleteCliente(req, res) {
  let id = req.body.id_cliente
  openDb().then(db => {
    db.get('DELETE FROM Cliente WHERE id_cliente=?', [id])
      .then(cliente => res.json(cliente))
  })
  res.json({
    "statusCode": 200
  })
}