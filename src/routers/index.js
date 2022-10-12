const express = require('express');
const router = express.Router();
const HumanController = require('../controllers/human');
const LoginController = require('../controllers/login');
const GroupController = require('../controllers/group');

const routers = [
  {
    path: '/',
    name: 'home',
    method: 'get',
    handle: (req,res,next) => res.send("ok")
  },
  {
    path: '/login',
    name: 'login',
    method: 'post',
    handle: LoginController.login
  },
  {
    path: '/signup',
    name: 'signup',
    method: 'post',
    handle: LoginController.sigup
  },
  {
    path: '/human/get',
    name: 'getHuman',
    method: 'get',
    handle: HumanController.get
  },
  {
    path: '/human/add',
    name: 'addHuman',
    method: 'post',
    handle: HumanController.add
  },
  {
    path: '/human/update/:id',
    name: 'updateHuman',
    method: 'put',
    handle: HumanController.update
  },
  {
    path: '/human/delete/:id',
    name: 'deleteHuman',
    method: 'delete',
    handle: HumanController.delete
  },
  {
    path: '/group',
    name: 'getGroup',
    method: 'get',
    handle: GroupController.get
  },
  {
    path: '/group/add',
    name: 'addGroup',
    method: 'post',
    handle: GroupController.add
  },
];
const configRouter = (app) => {
  routers.forEach(item => {
    app.use('/', router[item.method](item.path,
      async (req, res, next) => {
        if (!['/login', '/signup'].includes(item.path)) {
          req.userData = await LoginController.getUser(req.headers.authorization);
          if (!req.userData) {
            res.status(401).send('Authorization');
          } else {
            next();
          }
        } else {
          next();
        }
      },
      (req, res, next) => {
        return item.handle(req, res, next, req.userData);
      }
    ))
  })
};
module.exports = configRouter;
