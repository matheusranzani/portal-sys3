const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/crud-sys3', { // porta do Mongo: 27017
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectou ao BD');
}).catch(err => {
    console.log('Não conectou ao BD -> ' + err);
});

app.get('/', (req, res) => {
    res.send('Route is here');
});

const port = 3001;
app.listen(port, () => {
    console.log('Servidor rodando');
});