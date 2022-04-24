import { Router } from "express";
import mysql from 'mysql';

const router_empresario = Router();

router_empresario.get('/empresarios/read', (req, res) => {
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query('SELECT * FROM empresários', function(err, result){
    if (err) {
      res.send("Erro na Conexão com o Banco de dados")
    } else {
      res.send(result)
    }
  })

  connection.end();
});

router_empresario.post('/empresarios/create', (req, res) => {
  const dados = req.body;
  
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`INSERT INTO empresários (possui_loja, email, nome_empresário, senha, plano_atual, telefone_empresário) VALUES (${dados.possui_loja}, '${dados.email}', '${dados.nome_empresário}', '${dados.senha}', ${dados.plano_atual}, '${dados.telefone_empresário}')`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_empresario.put('/empresarios/update', (req, res) => {
  const dados = req.body;
  console.log("teste",dados)
  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`UPDATE empresários SET nome_empresário = '${dados.nome_empresário}', email = '${dados.email}', senha = '${dados.senha}', telefone_empresário = '${dados.telefone_empresário}' WHERE id_empresário = '${dados.id_empresário}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

router_empresario.delete('/empresarios/delete/:id', (req, res) => {
  const id = Number(req.params.id);

  var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '',
    database : 'multilojas'
  })

  connection.query(`DELETE FROM empresários WHERE id_empresário = '${id}'`, function(err, result){
    if (err) throw err;
  });

  connection.end();
});

export default router_empresario;