var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./server/config/config.js');
var path = require('path');

mongoose.connect(config.database);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');

    next();

});

app.use(morgan('dev'));

app.use(express.static(__dirname + "/client"));

var apiRoutes = require('./server/config/routes')(app, express);
app.use('/api', apiRoutes);

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/client/views/index.html'));
});

app.listen(config.port);
console.log('Server listening in port ' + config.port);