const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

const routes = express.Router();

routes.get('/boxes', BoxController.index);
routes.get('/boxes/:id', BoxController.show);
routes.post('/boxes', BoxController.store);
routes.put('/boxes/:id', BoxController.update);
routes.delete('/boxes/:id', BoxController.destroy);

routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

module.exports = routes;