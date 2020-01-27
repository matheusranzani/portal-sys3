const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost/crud-sys3', { // porta do Mongo: 27017
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectou ao BD');
}).catch(err => {
    console.log('Não conectou ao BD -> ' + err);
});
requireDir('./src/models');

// Teste de registro
// const Product = mongoose.model('Product');

// app.get('/', (req, res) => {
//     // Product.create({
//     //     code: 10,
//     //     ON: false,
//     //     description: 'testando',
//     //     group: '1',
//     //     stockQuantity: 20
//     // }).then(() => {
//     //     console.log('Produto registrado com sucesso');
//     // }).catch(err => {
//     //     console.log('Houve um erro -> ' + err);
//     // });

//     return res.send('Route is here');
// });

app.use(express.json());
app.use('/', require('./routes'));

const port = 3001;
app.listen(port, () => {
    console.log('Servidor rodando');
});