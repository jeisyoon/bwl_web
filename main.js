var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');

var subRouter = require('./routes/sub');
var indexRouter = require('./routes/index');


app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.get('/', function(request, response){
  response.redirect(`/index/I01`);
});
app.use('/index', indexRouter);
app.use('/sub', subRouter);

app.use(function(req, res, next ){
  res.status(404).send('File not Found !!');
});

app.use(function(err, req, res, next){
  res.status(500).send('Undefined !!');
});

app.listen(3000);