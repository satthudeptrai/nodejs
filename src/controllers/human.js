const HumanModel = require('../models/humanModel');
class HumanController {
  get = async (req, res, next, userData) => {
    const page = req.query.page || 1;
    const name = req.query.name || '';
    if (userData.role === 'admin') {
      HumanModel.find({name: {$regex: name}}).limit(5).skip((page - 1) * 5).then(data => {
        res.json({
          data: data,
          page: page,
          count: data.length
        });
        return true;
      }).catch(next);
    }
    if (userData.role === 'member') {
      HumanModel.find({ createBy: userData._id }).then(data => {
        res.json(data);
        return true;
      }).catch(next);
    }
  }
  add = (req, res, next, user) => {
    const data = {...req.body};
    data.createBy = user._id;
    const human = new HumanModel(data);
    human.save().then(item => {
      res.json(item);
    }).catch(next);
    
  }
  update = (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    HumanModel.updateOne({_id: id}, data).then(() => {
      res.json(data);
    }).catch(next);
  }
  delete = (req, res, next) => {
    const id = req.params.id;
    HumanModel.deleteOne({_id: id}).then(() => {
      res.json(id);
    }).catch(next);
  }
}
module.exports = new HumanController;