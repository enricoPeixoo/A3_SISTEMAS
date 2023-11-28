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
