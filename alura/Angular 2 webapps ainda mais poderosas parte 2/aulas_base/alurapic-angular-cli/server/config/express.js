var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../app/routes')
    ,path =  require('path');

app.set('clientPath', path.join(__dirname, '../..', 'client'));
console.log(app.get('clientPath'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
      res.sendStatus(200);
  }
  else {
     next();
  }
});

routes(app);

module.exports = app;