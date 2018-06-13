var express = require('express');
require('dotenv').config();
var path = require('path');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
var port = process.env.PORT || 2000;

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function (req, res) {
  console.log('get route hit');
  res.render('index');
});

app.get('/upload', function (req, res) {
  console.log('upload page loaded');
  res.render('upload');
});

app.post('/upload', function (req, res) {
  console.log('POST - upload hit');
  res.send('You done good kid');
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});

