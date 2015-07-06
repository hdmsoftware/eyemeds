var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new Schema({
    name: {type: String},
    role: {type: String}
});

var Roles = mongoose.model('Roles', RolesSchema);

exports.RolesSchema = RolesSchema;