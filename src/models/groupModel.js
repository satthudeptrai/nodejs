const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupModel = new Schema({
  name: {type: String, require: true},
  createBy: {type: String, require: true}
}, {
  timestamps: true
});
module.exports = mongoose.model('GroupModel', GroupModel);