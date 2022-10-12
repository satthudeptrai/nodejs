const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HumanModel = new Schema({
  name: {type: String},
  group: {type: Array},
  createBy: {type: String}
}, {
  timestamps: true
});
module.exports = mongoose.model('HumanModel', HumanModel);