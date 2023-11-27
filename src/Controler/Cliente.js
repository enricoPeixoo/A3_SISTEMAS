import { openDb } from "../configDB.js";

export async function createTableCliente() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Cliente ( id INTEGER PRIMARY KEY, nome TEXT)')
  })
}

export async function insertCliente(req, res) {
  let cliente = req.body
  openDb().then(db => {
    db.run('INSERT INTO Cliente (nome) VALUES (?)', [cliente.nome])
  })
  res.json({
    "statusCode": 200
  })
}

export async function selectClientes(req, res) {
  openDb().then(db => {
    db.all('SELECT * FROM Cliente')
      .then(clientes => res.json(clientes))
  })
}

export async function selectCliente(req, res) {
  let id = req.body.id
  openDb().then(db => {
    db.get('SELECT * FROM Cliente WHERE id=?', [id])
      .then(cliente => res.json(cliente))
  })
}

export async function updateCliente(req, res) {
  let cliente = req.body
  openDb().then(db => {
    db.run('UPDATE Cliente SET nome=? WHERE id=?', [cliente.nome, cliente.id])
  })
  res.json({
    "statusCode": 200
  })
}

export async function deleteCliente(req, res) {
  let id = req.body.id
  openDb().then(db => {
    db.get('DELETE FROM Cliente WHERE id=?', [id])
      .then(cliente => res.json(cliente))
  })
  res.json({
    "statusCode": 200
  })
}