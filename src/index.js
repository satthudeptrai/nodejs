const express = require('express');
const configRouter = require('./routers/index');
const connect = require('./config/db/index')
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
configRouter(app);
connect();
app.use((req, res, next) => {
  try {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  } catch (error) {
    next(error);
  }
})
app.use((err, req, res, next) => {
  console.log('err', err)
  return res.status(err.status || 500).json({
    error: err.status,
    message: err.message
  })
})

app.listen(3000);