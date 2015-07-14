var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new Schema({
    name: {type: String},
    role: {type: String},
    permissions: [
        {
            type: String,
            value: Boolean
        }
    ]
});

var Roles = mongoose.model('Roles', RolesSchema);

exports.Roles = Roles;