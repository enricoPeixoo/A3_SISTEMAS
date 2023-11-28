import { openDb } from './configDB.js';
import { createTableCliente} from './Controler/Cliente.js';
import { createTable} from './Controler/Produto.js';
import { createTablePedidos } from './Controler/Pedidos.js';
import express from 'express';

const app = express();
app.use(express.json());

createTable();
createTableCliente();
createTablePedidos();

import  router  from './routes.js';
app.use(router);

app.listen(3000, () => {
  console.log('API RODANDO!!!!!')
})