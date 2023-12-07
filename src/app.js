import { openDb } from './configDB.js';
import { createTableCliente} from './Controler/Cliente.js';
import { createTable} from './Controler/Produto.js';
import { createTablePedidos } from './Controler/Pedidos.js';
import express from 'express';
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors())
//Criação das tabelas caso elas não existam
createTable();
createTableCliente();
createTablePedidos();

//Importação das rotas no arquivo routes.js
import  router  from './routes.js';
app.use(router);

//Teste para dizer se a API está funcionando
app.listen(3000, () => {
  console.log('API RODANDO!!!!!')
})