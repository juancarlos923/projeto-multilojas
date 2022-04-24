-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.24-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para multilojas
CREATE DATABASE IF NOT EXISTS `multilojas` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `multilojas`;

-- Copiando estrutura para tabela multilojas.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(50) DEFAULT NULL,
  `email_cliente` varchar(60) DEFAULT NULL,
  `cpf_cliente` varchar(18) DEFAULT NULL,
  `endereco_cliente` varchar(80) DEFAULT NULL,
  `telefone_cliente` varchar(20) DEFAULT NULL,
  `forma_pagamento` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela multilojas.cliente: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` (`id_cliente`, `nome_cliente`, `email_cliente`, `cpf_cliente`, `endereco_cliente`, `telefone_cliente`, `forma_pagamento`) VALUES
	(2, 'Cliente2', 'teste@cliente.com', '111.222.333-44', 'Nenhuma', '(83) 98888-7777', 'Nenhuma');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Copiando estrutura para tabela multilojas.compras
CREATE TABLE IF NOT EXISTS `compras` (
  `id_compra` int(11) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(11) DEFAULT NULL,
  `id_loja` int(11) NOT NULL,
  `qtde_produtos` int(11) NOT NULL,
  `desc_compra` varchar(100) DEFAULT NULL,
  `data_compra` date NOT NULL,
  `valor_total_compra` decimal(7,2) NOT NULL DEFAULT 0.00,
  `forma_pagamento_compra` varchar(14) NOT NULL,
  `entrega_compra` varchar(3) NOT NULL,
  `status_compra` varchar(14) NOT NULL,
  PRIMARY KEY (`id_compra`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela multilojas.compras: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` (`id_compra`, `id_cliente`, `id_loja`, `qtde_produtos`, `desc_compra`, `data_compra`, `valor_total_compra`, `forma_pagamento_compra`, `entrega_compra`, `status_compra`) VALUES
	(3, NULL, 1, 5, 'teste', '2021-12-04', 1000.00, 'Pix', 'Sim', 'Aprovado'),
	(4, 2, 5, 4, 'Produtos onlines', '0000-00-00', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(5, 2, 5, 4, 'Produtos onlines', '0000-00-00', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(6, 2, 5, 4, 'Produtos onlines', '0000-00-00', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(7, 2, 5, 4, 'Produtos onlines', '0000-00-00', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(8, 2, 5, 4, 'Produtos onlines', '0000-00-00', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(9, 2, 5, 4, 'Produtos onlines', '0000-00-00', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(10, 2, 5, 4, 'Produtos onlines', '0000-00-00', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(11, 2, 5, 4, 'Produtos onlines', '2022-03-03', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(12, 2, 5, 4, 'Produtos onlines', '2022-04-21', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(13, 2, 5, 4, 'Produtos onlines', '2022-04-21', 52.70, 'Cartão', 'Ema', 'Entregue'),
	(14, 22, 5, 4, 'Produtos onlines', '2022-04-21', 52.70, 'Cartão', 'Ema', 'Entregue');
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;

-- Copiando estrutura para tabela multilojas.empresários
CREATE TABLE IF NOT EXISTS `empresários` (
  `id_empresário` int(11) NOT NULL AUTO_INCREMENT,
  `possui_loja` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `nome_empresário` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `plano_atual` int(11) NOT NULL DEFAULT 0,
  `telefone_empresário` varchar(20) NOT NULL,
  PRIMARY KEY (`id_empresário`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=18446744073709551615 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela multilojas.empresários: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `empresários` DISABLE KEYS */;
INSERT INTO `empresários` (`id_empresário`, `possui_loja`, `email`, `nome_empresário`, `senha`, `plano_atual`, `telefone_empresário`) VALUES
	(1, 1, 'teste@google.com.br', 'Cliente2', '698dc19d489c4e4db73e28a713eab07b', 0, '(83) 98888-6662'),
	(3, 0, '', '', '', 0, '83988886666'),
	(4, 0, '', '', '', 0, '83988886666'),
	(5, 0, '', 'João Pedro', '', 0, '83988886666'),
	(8, 0, '', '', '', 0, '83988886666'),
	(9, 0, '', '', '', 0, '83988886666'),
	(10, 0, 'teste@test.com', 'João', 'a#raf0', 0, '83988887777'),
	(11, 1, 'teste@test.com', 'João', 'a#raf0', 2, '83988887777');
/*!40000 ALTER TABLE `empresários` ENABLE KEYS */;

-- Copiando estrutura para tabela multilojas.lojas
CREATE TABLE IF NOT EXISTS `lojas` (
  `id_loja` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresário` int(11) NOT NULL,
  `nome_loja` varchar(40) DEFAULT NULL,
  `desc_loja` varchar(200) NOT NULL,
  `telefone_loja` varchar(20) DEFAULT NULL,
  `termos_loja` varchar(300) NOT NULL,
  `cnpj_loja` varchar(18) NOT NULL,
  PRIMARY KEY (`id_loja`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela multilojas.lojas: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `lojas` DISABLE KEYS */;
INSERT INTO `lojas` (`id_loja`, `id_empresário`, `nome_loja`, `desc_loja`, `telefone_loja`, `termos_loja`, `cnpj_loja`) VALUES
	(2, 5, 'Loja 1', 'Produtos onlines', '(83) 98888-7777', 'vendas via tais pagamentos', '222.222.22/0000-XX'),
	(3, 1, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined'),
	(4, 1, 'teeeeeeee', '2222222222', '(32) 33333-3333', '22222222222', '22.222.222/2222-22'),
	(5, 1, 'teeeeeeeee', 'aaaaaaaa', '(33) 33333-3333', 'aaaaaaaaa', '21.111.111/1111-11'),
	(6, 1, 'tessssssssssss', '2aaaaaaaaa', '(23) 33333-3333', '222222222222222', '22.222.222/2222-22'),
	(7, 1, 'tessssssssssss', '2aaaaaaaaa', '(23) 33333-3333', '222222222222222', '22.222.222/2222-22'),
	(8, 1, 'tessssssssssss', '2aaaaaaaaa', '(23) 33333-3333', '222222222222222', '22.222.222/2222-22'),
	(9, 1, 'tessssssssssss', '2aaaaaaaaa', '(23) 33333-3333', '222222222222222', '22.222.222/2222-22'),
	(10, 1, 'tessssssssssss', '2aaaaaaaaa', '(23) 33333-3333', '2111111111', '22.222.222/2222-22');
/*!40000 ALTER TABLE `lojas` ENABLE KEYS */;

-- Copiando estrutura para tabela multilojas.produto
CREATE TABLE IF NOT EXISTS `produto` (
  `id_produto` int(11) NOT NULL AUTO_INCREMENT,
  `id_loja` int(11) NOT NULL,
  `nome_produto` varchar(50) NOT NULL,
  `desc_produto` varchar(100) DEFAULT NULL,
  `categoria_produto` varchar(14) DEFAULT NULL,
  `preço_produto` decimal(6,2) NOT NULL DEFAULT 0.00,
  `qtde_estoque_produto` int(11) DEFAULT NULL,
  `forma_entrega` varchar(14) NOT NULL DEFAULT '',
  `imagem_produto` varchar(100) NOT NULL,
  PRIMARY KEY (`id_produto`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela multilojas.produto: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` (`id_produto`, `id_loja`, `nome_produto`, `desc_produto`, `categoria_produto`, `preço_produto`, `qtde_estoque_produto`, `forma_entrega`, `imagem_produto`) VALUES
	(1, 1, 'Produto de Teste', 'Descrição de Produto de Teste', 'Categoria vai ', 150.00, 5, 'Pix', ''),
	(6, 0, 'Salada', 'Produto2 lindo', 'Alimento', 11.20, 22, 'Online', 'Nenhuma'),
	(7, 0, 'Salada', 'Produto lindo', 'Alimento', 11.20, 22, 'Online', 'Nenhuma');
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
