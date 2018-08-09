'use strict';

const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const router = express.Router();

//carrega as Rotas
const indexRoutes = require('./routes/index-route');
const productRoutes = require('./routes/product-route');

//transforma em json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//executa as rotas
app.use('/', indexRoutes);
app.use('/products', productRoutes);


module.exports = app;