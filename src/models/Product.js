const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    code: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('Product', ProductSchema);