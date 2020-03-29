/**
 *  Rota / Recurso
 */

GET: buscar informações do back-end.
POST: criar uma informação no back-end.
PUT: alterar uma informação no back-end.
DELETE: deletar uma informação no back-end.
 

Query Params: Parametros nomeados enviados na rota após o simbolo de ?  (Filtros, paginação)
Route Params: Serve para identicar recursos
Body: Corpo da requisição, utilizado para criar ou alterar recursos



instalar o nodemon para não ficar reiniciando o index.js

npm install nodemon -D


instalar o cors para determinar quem pode acessar a API

npm install cors

validação da API

npm install celebrate

Instalacao lib de testes

npm install jest

npx jest --init

npm test


para rodar env de testes no jest e ter ambiente para desenvolvimento:

npm install cross-env

Para testes de integração usar o supertest

npm install supertest -D