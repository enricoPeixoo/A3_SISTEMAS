import { openDb } from "../configDB.js";

export async function createTableCliente() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Cliente ( id INTEGER PRIMARY KEY, nome TEXT)')
  })
}

export async function insertCliente(cliente) {
  openDb().then(db => {
    db.run('INSERT INTO Cliente (nome) VALUES (?)', [cliente.nome])
  })
}

export async function selectClientes() {
  return openDb().then(db => {
    return db.all('SELECT * FROM Cliente')
      .then(res => res)
  })
}

export async function selectCliente(id) {
  return openDb().then(db => {
    return db.get('SELECT * FROM Cliente WHERE id=?', [id])
      .then(res => res)
  })
}

export async function updateCliente(cliente) {
  openDb().then(db => {
    db.run('UPDATE Cliente SET nome=? WHERE id=?', [cliente.nome, cliente.id])
  })
}

export async function deleteCliente(id) {
  return openDb().then(db => {
    return db.get('DELETE FROM Cliente WHERE id=?', [id])
      .then(res => res)
  })
}