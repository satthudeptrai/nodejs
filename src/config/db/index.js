const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/nodeapi');
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;