const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// routes.post('/users/:id', (request, response) => {

//     const routeParams = request.params;
//     const queryParams = request.query;
//     const requestBody = request.body;

//     console.log(routeParams, queryParams, requestBody);

//     return response.json({
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Rafael Jesus Sandim'
//     });
// });

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;