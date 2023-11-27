import { openDb } from './configDB.js';
import { createTableCliente, deleteCliente, insertCliente, selectCliente, selectClientes, updateCliente } from './Controler/Cliente.js';
import { createTable, insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto } from './Controler/Produto.js';
import express from 'express';

const app = express();
app.use(express.json());

createTable();
createTableCliente();

import  router  from './routes.js';
app.use(router);



// //Lista todos os produtos em estoque
// app.get('/produtos', async function(req, res){
//   let produtos = await selectProdutos()
//   res.json(produtos);
// })

// //Lista um produto especifico por ID
// app.get('/produto', async function(req, res){
//   let produto = await selectProduto(req.body.id)
//   res.json(produto);
// })

// //Adiciona um produto
// app.post('/produto', (req, res) => {
//   insertProduto(req.body)
//   res.json({
//     "statusCode": 200 
//   })
// })

// //Edita um produto especifico por ID
// app.put('/produto', (req, res) => {
//   if(req.body && !req.body.id) {
//     res.json({
//       "statusCode": 400,
//       "msg":"Você precisa informar um id"
//     })
//   } else {
//     updateProduto(req.body)
//     res.json({
//       "statusCode": 200 
//     })
//   }
// })

// //Deleta um produto do estoque por ID
// app.delete('/produto', async function(req, res){
//   let produto = await deleteProduto(req.body.id)
//   res.json(produto);
// })

// //-------------------- CLIENTE ABAIXO ----------------------------//

// //Adiciona um cliente
// app.post('/cliente', (req, res) => {
//   insertCliente(req.body)
//   res.json({
//     "statusCode": 200 
//   })
// })

// //Lista todos os clientes cadastrados
// app.get('/clientes', async function(req, res){
//   let clientes = await selectClientes()
//   res.json(clientes);
// })

// //Lista um cliente especifico por ID
// app.get('/cliente', async function(req, res){
//   let cliente = await selectCliente(req.body.id)
//   res.json(cliente);
// })

// //Edita um cliente especifico por ID
// app.put('/cliente', (req, res) => {
//   if(req.body && !req.body.id) {
//     res.json({
//       "statusCode": 400,
//       "msg":"Você precisa informar um id"
//     })
//   } else {
//     updateCliente(req.body)
//     res.json({
//       "statusCode": 200 
//     })
//   }
// })

// //Deleta um cliente por ID
// app.delete('/cliente', async function(req, res){
//   let cliente = await deleteCliente(req.body.id)
//   res.json(cliente);
// })

app.listen(3000, () => {
  console.log('API RODANDO!!!!!')
})