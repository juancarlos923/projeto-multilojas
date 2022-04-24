import express from 'express';
import morgan from 'morgan';
import router_empresario from './routes/empresarios.js';
import router_cliente from './routes/cliente.js';
import router_compras from './routes/compras.js';
import router_lojas from './routes/lojas.js';
import router_produto from './routes/produto.js';

const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.use(express.static('public'));

app.use(router_empresario);
app.use(router_cliente);
app.use(router_compras);
app.use(router_lojas);
app.use(router_produto);

app.listen(3000, () => console.log('Server is running!'));
