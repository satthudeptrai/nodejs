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
      const err = new Error();
      err.status = 401;
      err.message = 'username or password wrong !!!!'
      next(err);
    } catch (error) {
      next(error);
    }
  };
  sigup = async (req, res, next) => {
    try {
      const user = {...req.body};
      const data = await LoginModel.create(user);
      res.json(data);
    } catch(err) {
      res.status(409).json(err)
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