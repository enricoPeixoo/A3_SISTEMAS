import { Router } from "express";
import { createTableCliente, deleteCliente, insertCliente, selectCliente, selectClientes, updateCliente } from './Controler/Cliente.js';
import { createTable, insertProduto, updateProduto, selectProdutos, selectProduto, deleteProduto, selectProdutosBaixaQuantidade } from './Controler/Produto.js';
import { insertPedido, produtosMaisVendidos, selectPedidos } from "./Controler/Pedidos.js";


const router = Router()

//Rotas dos EndPoints para as funções de CRUD de Cliente e Produto

//EndPoints GET para retornar todos os dados cadastrados
router.get('/produtos', selectProdutos) 
router.get('/clientes', selectClientes) 
router.get('/pedidos', selectPedidos) 

//EndPoints GET para retornar UM dado usando ID
router.get('/produto', selectProduto)
router.get('/cliente', selectCliente)

//EndPoints POST para criar um novo dado
router.post('/produto', insertProduto)
router.post('/cliente', insertCliente)
router.post('/pedido', insertPedido)

//EndPoints PUT para editar um dado já existente
router.put('/produto', updateProduto)
router.put('/cliente', updateCliente)

//EndPoints DELETE para deletar um dado já existente
router.delete('/produto', deleteProduto)
router.delete('/cliente', deleteCliente)

//Rotas dos EndPoints para as funções para a geração dos relatórios estatísticos
router.get('/produtos-baixa-quantidade', selectProdutosBaixaQuantidade);
router.get('/produtos-mais-vendidos', produtosMaisVendidos)

export default router;
