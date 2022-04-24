import { Router } from "express";
import mysql from 'mysql';

const router_lojas = Router();

router_lojas.get('/lojas/read', (req, res) => {
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query('SELECT * FROM lojas', function(err, result){
    if (err) {
      res.send("Erro na Conexão com o Banco de dados")
    } else {
      res.send(result)
    }
  })

  connection.end();
});

router_lojas.post('/lojas/create', (req, res) => {
  const dados = req.body;
  
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`INSERT INTO lojas (id_empresário, nome_loja, desc_loja, telefone_loja, termos_loja, cnpj_loja) VALUES (${dados.id_empresário}, '${dados.nome_loja}', '${dados.desc_loja}', '${dados.telefone_loja}', '${dados.termos_loja}', '${dados.cnpj_loja}')`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_lojas.put('/lojas/update', (req, res) => {
  const dados = req.body;
  
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`UPDATE lojas SET id_empresário = '${dados.id_empresário}', nome_loja = '${dados.nome_loja}', desc_loja = '${dados.desc_loja}', telefone_loja = '${dados.telefone_loja}', termos_loja = '${dados.termos_loja}', cnpj_loja = '${dados.cnpj_loja}' WHERE id_loja = '${dados.id_loja}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_lojas.delete('/lojas/delete/:id', (req, res) => {
  const id = Number(req.params.id);

  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`DELETE FROM lojas WHERE id_loja = '${id}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

export default router_lojas;
