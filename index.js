var express = require('express');
var app = express();
var moment = require('moment');

require('dotenv').config();
var app_port = process.env.APP_PORT || 3000;

app.get('/', function (req, res) {
  res.type('json');
  res.send({date_time: moment().format()});
});

app.all('*', function(req, res){
  res.type('json');
  res.status(404).send({status: 404});
});

app.listen(app_port, function () {
  console.log('Listening on port: ' + app_port);
})
