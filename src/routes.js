import { Router } from "express";
import { createTableCliente, deleteCliente, insertCliente, selectCliente, selectClientes, updateCliente } from './Controler/Cliente.js';
import { createTable, insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto, selectProdutosBaixaQuantidade } from './Controler/Produto.js';
import { insertPedido, produtosMaisVendidos } from "./Controler/Pedidos.js";


const router = Router()

//Rotas dos EndPoints para as funções de CRUD de Cliente e Produto
router.get('/produtos', selectProdutos)
router.get('/clientes', selectClientes)

router.get('/produto', selectProduto)
router.get('/cliente', selectCliente)

router.post('/produto', insertProduto)
router.post('/cliente', insertCliente)
router.post('/pedido', insertPedido)

router.put('/produto', updateProduto)
router.put('/cliente', updateCliente)

router.delete('/produto', deleteProduto)
router.delete('/cliente', deleteCliente)

//Rotas dos EndPoints para as funções para a geração dos relatórios estatísticos
router.get('/produtos-baixa-quantidade', selectProdutosBaixaQuantidade);
router.get('/produto-mais-vendido', produtosMaisVendidos)

export default router;
