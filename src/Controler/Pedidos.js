import { openDb } from "../configDB.js";

export async function createTablePedidos() {
  openDb().then(db => {
    db.exec('CREATE TABLE IF NOT EXISTS Pedido ( id_pedido INTEGER PRIMARY KEY, cliente_id INT, produto_id INT, quantidade_pedido INT, total_pedido FLOAT, FOREIGN KEY (cliente_id) REFERENCES Clientes(cliente_id), FOREIGN KEY (produto_id) REFERENCES produto(produto_id))')
  })
}

