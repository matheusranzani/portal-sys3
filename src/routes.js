const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');

require('./models/Product');
const Product = mongoose.model('Product');

const ProductController = require('../controllers/ProductController');

routes.get('/', (req, res) => {
    res.render('index.ejs');
});
routes.get('/cadastrar-produtos', (req, res) => {
    res.render('cadastrar-produtos.ejs');
});
routes.get('/consultar-produtos', (req, res) => {
    Product.find().then((products) => {
        res.render('consultar-produtos.ejs', { products: products });
    });
});
routes.get('/consultar-vendas', (req, res) => {
    res.render('consultar-vendas.ejs');
});
routes.get('/login', (req, res) => {
    res.render('tela-login/index.ejs');
});

routes.post('/create', ProductController.create);

module.exports = routes;