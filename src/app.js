const express = require('express');
const { populate } = require('./models/User');
const app = express();

app.use(express.json()); // el servidor comprendera objetos json
app.use(express.urlencoded({extended:false})); // el servidor comprendera datos de un formulario

app.use(require('./controllers/authController'));
module.exports = app;