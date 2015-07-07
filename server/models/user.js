var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }


});

var User = mongoose.model('User', UserSchema);

exports.UserSchema = UserSchema;