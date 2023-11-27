import { Router } from "express";
import { createTableCliente, deleteCliente, insertCliente, selectCliente, selectClientes, updateCliente } from './Controler/Cliente.js';
import { createTable, insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto } from './Controler/Produto.js';

const router = Router()

router.get('/produtos', selectProdutos)
router.get('/clientes', selectClientes)

router.get('/produto', selectProduto)
router.get('/cliente', selectCliente)

router.post('/produto', insertProduto)
router.post('/cliente', insertCliente)

router.put('/produto', updateProduto)
router.put('/cliente', updateCliente)

router.delete('/produto', deleteProduto)
router.delete('/cliente', deleteCliente)


export default router;





// //-------------------- CLIENTE ABAIXO ----------------------------//

// //Adiciona um cliente
// app.post('/cliente', (req, res) => {
//   insertCliente(req.body)
//   res.json({
//     "statusCode": 200 
//   })
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