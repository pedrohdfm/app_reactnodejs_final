const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const Product = new mongoose.Schema({
    name: { type: String, required: true },
    preco: { type: String, required: true },
    validade: { type: String, required: true },
    categoria: { type: String, required: true },
    codigoProduto: { type: String, default: uuidv4, unique: true }
},
    { collection: 'product-data' }
)

const model = mongoose.model('ProductModel', Product)

module.exports = model