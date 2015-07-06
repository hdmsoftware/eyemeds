// modules =================================================

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

var db = require('./server/config/db');

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/client'));

require('./server/config/routes')(app);

app.listen(port);

console.log('Server is listening on port ' + port);

exports = module.exports = app;


