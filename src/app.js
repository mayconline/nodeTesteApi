'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conectar ao banco
mongoose.connect('mongodb://localhost:27017/nodeTeste');

//carrega os Models
const Product = require('./models/product');

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