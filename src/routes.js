const express = require('express');

const BoxController = require('./controllers/BoxController');

const routes = express.Router();

routes.get('/boxes', BoxController.index);
routes.get('/boxes/:id', BoxController.show);
routes.post('/boxes', BoxController.store);
routes.put('/boxes/:id', BoxController.update);
routes.delete('/boxes/:id', BoxController.destroy);

module.exports = routes;