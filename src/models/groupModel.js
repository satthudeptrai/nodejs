const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupModel = new Schema({
  name: {type: String},
  createBy: {type: String}
}, {
  timestamps: true
});
module.exports = mongoose.model('GroupModel', GroupModel);