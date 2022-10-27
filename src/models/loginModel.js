const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginModel = new Schema({
  username: {type: String, unique: true , require: true},
  password: {type: String, require: true},
  role: {type: String, require: true}
});
module.exports = mongoose.model('LoginModel', LoginModel);