const { getToken, parseToken } = require('../ulti/token');
const LoginModel = require('../models/loginModel');
class LoginController {
  login = async (req, res, next) => {
    try {
      const data = {...req.body};
      const item = await LoginModel.findOne({username: data.username, password: data.password});
      if (item) {
        const token = getToken(data);
        res.setHeader('Authorization', token);
        res.status(200).json(data);
        return true;
      }
      res.status(401).json({
        error: {
          message: 'username or password wrong !!!!'
        }
      });
      return false;
    } catch (error) {
      next(error);
    }
  };
  sigup = async (req, res, next) => {
    try {
      const data = await LoginModel.create({...req.body});
      res.json(data);
    } catch(err) {
      console.log('1231231231')
      next(err)
    }
  };
  getUser = async (token) => {
    try {
      const { username, password } = await parseToken(token);
      const res = await LoginModel.findOne({ username: username, password: password });
      if(res) {
        return res;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }

}
module.exports = new LoginController;