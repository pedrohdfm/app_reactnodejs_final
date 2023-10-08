const mongoose = require('mongoose')
const User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cpf: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},
    { collection: 'user-data' }
)

const model = mongoose.model('UserModel', User)

module.exports = model