const express = require('express');
const app = express();

app.use(express.json()); // el servidor comprendera objetos json
app.use(express.urlencoded({extended:false})); // el servidor comprendera datos de un formulario

module.exports = app;