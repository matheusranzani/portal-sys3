const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async create(req, res) {
        await Product.create(req.body);

        res.redirect('/consultar-produtos');
    },
    // async update(req, res) {
    //     await Product.
    // }
}