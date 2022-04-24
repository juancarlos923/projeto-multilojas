import { Router } from "express";
import mysql from 'mysql';

const router_produto = Router();

router_produto.get('/produto/read', (req, res) => {
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query('SELECT * FROM produto', function(err, result){
    if (err) {
      res.send("Erro na Conexão com o Banco de dados")
      console.log(err)
    } else {
      res.send(result)
    }
  })

  connection.end();
});

router_produto.post('/produto/create', (req, res) => {
  const dados = req.body;
  
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`INSERT INTO produto (nome_produto, desc_produto, categoria_produto, preço_produto, qtde_estoque_produto, forma_entrega, imagem_produto) VALUES ('${dados.nome_produto}', '${dados.desc_produto}', '${dados.categoria_produto}', ${dados.preço_produto}, ${dados.qtde_estoque_produto}, '${dados.forma_entrega}', '${dados.imagem_produto}')`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_produto.put('/produto/update', (req, res) => {
  const dados = req.body;
  
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`UPDATE produto SET nome_produto = '${dados.nome_produto}', desc_produto = '${dados.desc_produto}', categoria_produto = '${dados.categoria_produto}', preço_produto = ${dados.preço_produto}, qtde_estoque_produto = '${dados.qtde_estoque_produto}', forma_entrega = '${dados.forma_entrega}', imagem_produto = '${dados.imagem_produto}' WHERE id_produto = '${dados.id_produto}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_produto.delete('/produto/delete/:id', (req, res) => {
  const id = Number(req.params.id);

  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`DELETE FROM produto WHERE id_produto = '${id}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

export default router_produto;