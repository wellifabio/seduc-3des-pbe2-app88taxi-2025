const express = require('express');
const routes = express.Router();

const Passageiro = require('./controllers/passageiro');
// const Motorista = require('./controllers/motorista');
// const Viagem = require('./controllers/viagem');

routes.get('/', (req, res) => {
  return res.json({ titulo: '88 Taxi' });
});

routes.post('/passageiros', Passageiro.create);
routes.get('/passageiros', Passageiro.read);
routes.get('/passageiros/:id', Passageiro.readOne);
routes.put('/passageiros/:id', Passageiro.update);
routes.delete('/passageiros/:id', Passageiro.remove);

module.exports = routes;