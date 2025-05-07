const express = require('express');
const routes = express.Router();

const Passageiro = require('./controllers/passageiro');
const Motorista = require('./controllers/motorista');
const Viagem = require('./controllers/viagem');

routes.get('/', (req, res) => {
  return res.json({ titulo: '88 Taxi' });
});

routes.post('/passageiros', Passageiro.create);
routes.get('/passageiros', Passageiro.read);
routes.get('/passageiros/:id', Passageiro.readOne);
routes.patch('/passageiros/:id', Passageiro.update);
routes.delete('/passageiros/:id', Passageiro.remove);

routes.post('/motoristas', Motorista.create);
routes.get('/motoristas', Motorista.read);
routes.get('/motoristas/:id', Motorista.readOne);
routes.patch('/motoristas/:id', Motorista.update);
routes.delete('/motoristas/:id', Motorista.remove);

routes.post('/viagens', Viagem.create);
routes.get('/viagens', Viagem.read);
routes.get('/viagens/:id', Viagem.readOne);
routes.patch('/viagens/:id', Viagem.update);
routes.delete('/viagens/:id', Viagem.remove);

module.exports = routes;