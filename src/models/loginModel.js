const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginModel = new Schema({
  username: {type: String, unique: true},
  password: {type: String},
  role: {type: String}
});

module.exports = mongoose.model('LoginModel', LoginModel);