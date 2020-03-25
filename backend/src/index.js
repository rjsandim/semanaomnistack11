const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 *  Rota / Recurso
 */

/**
 *  GET: buscar informações do back-end.
 *  POST: criar uma informação no back-end.
 *  PUT: alterar uma informação no back-end.
 *  DELETE: deletar uma informação no back-end.
 */

/**
 *     Query Params: Parametros nomeados enviados na rota após o simbolo de ?  (Filtros, paginação)
 *     Route Params: Serve para identicar recursos
 *     Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 *  instalar o nodemon para não ficar reiniciando o index.js
 *
 *  npm install nodemon -D
 */

/**
 *  intalar o cors para determinar quem pode acessar a API
 *
 *  npm install cors
 */
