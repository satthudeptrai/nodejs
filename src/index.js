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
  console.log('res',res)
  try {
    console.log(404)
    return res.status(404).json({
      error: {
        message: 'Not found'
      }
    })
  } catch (error) {
    next(error);
  }
})
app.use(() => {
  console.log(500)
  return res.status(500).json({
    error: {
      message: 'loix vl'
    }
  })
})

app.listen(3000);