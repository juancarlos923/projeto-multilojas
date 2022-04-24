import { Router } from "express";
import mysql from 'mysql';

const router_compras = Router();

router_compras.get('/compras/read', (req, res) => {
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query('SELECT * FROM compras', function(err, result){
    if (err) {
      res.send("Erro na Conexão com o Banco de dados")
    } else {
      res.send(result)
    }
  })

  connection.end();
});

router_compras.post('/compras/create', (req, res) => {
  const dados = req.body;
  
  const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`INSERT INTO compras (id_cliente, id_loja, qtde_produtos, desc_compra, data_compra, valor_total_compra, forma_pagamento_compra, entrega_compra, status_compra) VALUES (${dados.id_cliente}, ${dados.id_loja}, ${dados.qtde_produtos}, '${dados.desc_compra}', '${date}', ${dados.valor_total_compra}, '${dados.forma_pagamento_compra}', '${dados.entrega_compra}', '${dados.status_compra}')`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_compras.put('/compras/update', (req, res) => {
  const dados = req.body;
  
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`UPDATE compras SET id_cliente = '${dados.id_cliente}', id_loja = '${dados.id_loja}', qtde_produtos = '${dados.qtde_produtos}', desc_compra = '${dados.desc_compra}', valor_total_compra = '${dados.valor_total_compra}', forma_pagamento_compra = '${dados.forma_pagamento_compra}', entrega_compra = '${dados.entrega_compra}', status_compra = '${dados.status_compra}' WHERE id_compra = '${dados.id_compra}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_compras.delete('/compras/delete/:id', (req, res) => {
  const id = Number(req.params.id);

  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`DELETE FROM compras WHERE id_compra = '${id}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

export default router_compras;