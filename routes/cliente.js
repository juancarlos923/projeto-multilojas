import { Router } from "express";
import mysql from 'mysql';

const router_cliente = Router();

router_cliente.get('/cliente/read', (req, res) => {
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query('SELECT * FROM cliente', function(err, result){
    if (err) {
      res.send("Erro na Conexão com o Banco de dados")
    } else {
      res.send(result)
    }
  })

  connection.end();
});

router_cliente.post('/cliente/create', (req, res) => {
  const dados = req.body;
  
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`INSERT INTO cliente (nome_cliente, email_cliente, cpf_cliente, endereco_cliente, telefone_cliente, forma_pagamento) VALUES ('${dados.nome_cliente}', '${dados.email_cliente}', '${dados.cpf_cliente}', '${dados.endereco_cliente}', '${dados.telefone_cliente}', '${dados.forma_pagamento}')`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_cliente.put('/cliente/update', (req, res) => {
  const dados = req.body;
  
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })
  
  connection.query(`UPDATE cliente SET nome_cliente = '${dados.nome_cliente}', email_cliente = '${dados.email_cliente}', cpf_cliente = '${dados.cpf_cliente}', endereco_cliente = '${dados.endereco_cliente}', endereco_cliente = '${dados.telefone_cliente}', endereco_cliente = '${dados.forma_pagamento}' WHERE id_cliente = '${dados.id_cliente}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_cliente.delete('/cliente/delete/:id', (req, res) => {
  const id = Number(req.params.id);

  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`DELETE FROM cliente WHERE id_cliente = '${id}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

export default router_cliente;
