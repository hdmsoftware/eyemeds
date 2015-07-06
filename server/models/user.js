var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({

});

var User = mongoose.model('User', UserSchema);

exports.UserSchema = UserSchema;