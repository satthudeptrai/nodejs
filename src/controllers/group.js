const GroupModel = require('../models/groupModel');
const HumanModel = require('../models/humanModel');
class GroupController {
  get = async (req, res, next) => {
    try {
      const page = req.query.page || 1;
      const data = await GroupModel.find({}).skip((page - 1) * 5).limit(5);
      res.json({
        data: data,
        page: page,
        count: data.length
      })
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  add = async (req, res, next, user) => {
    try {
      const data = {...req.body};
      data.createBy = user._id
      const group = await GroupModel.create(data);
      res.json(group);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
module.exports = new GroupController;