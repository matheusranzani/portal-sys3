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
    Product.find().sort( {createdAt: 'desc'} ).then((products) => {
        res.render('consultar-produtos.ejs', { products });
    }).catch(err => {
        console.log(`erro -> ${err}`);
    });
});
routes.get('/consultar-vendas', (req, res) => {
    res.render('consultar-vendas.ejs');
});
routes.get('/editar-produtos/:id', (req, res) => {
    Product.findOne({ _id: req.params.id }).then(product => {
        res.render('editar-produtos.ejs', { product });
    }).catch(err => {
        console.log(`erro -> ${err}`);
    });
});


routes.post('/create', ProductController.create);
routes.post('/edit/:id', (req, res) => {
    Product.findOne({ _id: req.params.id }).then(product => {
        if (
            product.code == req.body.code
            && product.description == req.body.description
            && product.stockQuantity == req.body.stockQuantity
        ) {
            return;
        } else {
            product.code = req.body.code;
            product.description = req.body.description;
            product.stockQuantity = req.body.stockQuantity;
            
            product.save().then(() => {
                console.log('editado com sucesso');
            }).catch(err => {
                console.log(`erro ao editar -> ${err}`);
            });
        }
    }).catch(err => {
        console.log(`erro -> ${err}`);
    });

    res.redirect('/consultar-produtos');
});
routes.get('/delete/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id).then(() => {
        console.log('excluido com sucesso');
    }).catch(err => {
        console.log('erro ao excluir -> ' + err);
    });
    
    res.redirect('/consultar-produtos');
});

routes.get('/cadastrar-produtos-todos-os-campos', (req, res) => {
    res.render('cadastrar-produtos-todos-os-campos.ejs');
});

routes.get('/login', (req, res) => {
    res.render('index_login.ejs');
});

module.exports = routes;