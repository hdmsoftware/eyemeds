var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegimenSchema = new Schema({



});

var Regimen = mongoose.model('Regimen', RegimenSchema);

exports.RegimenSchema = RegimenSchema;