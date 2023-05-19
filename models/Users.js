const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
links: [{ type: Types.ObjectId, ref: 'Link' }] //у каждого пользователя свой массив данных, связка модели пользователя и определенных данных в базе данных 
});

module.exports = model('User', schema)

//Это файл нашего пользователя
