const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HumanModel = new Schema({
  name: {type: String, require: true},
  group: {type: Array, require: true},
  createBy: {type: String, require: true}
}, {
  timestamps: true
});
module.exports = mongoose.model('HumanModel', HumanModel);