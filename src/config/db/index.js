const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/railsr');
    console.log("connect")
  } catch (error) {
    console.log(error);
  }
};
const disconnect = async () => {
  try {
    mongoose.connection.close();
    console.log("disconnect");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { connect, disconnect };