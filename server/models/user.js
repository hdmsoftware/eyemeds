var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;


var UserSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: '{PATH} is required!'
    },
    city: {
        type: String,
        required: '{PATH} is required!'
    },
    address: {
        type: String,
        required: '{PATH} is required!'
    },
    zipCode: {
        type: String,
        required: '{PATH} is required!'
    },
    state: {
        type: String,
        required: '{PATH} is required!'
    },
    name: {
        type: String,
        required: '{PATH} is required!'
    },
    hashedPassword: {
        type: String,
        required: '{PATH} is required!'
    },
    salt: {
        type: String,
        required: '{PATH} is required!'
    },
    created_at: {
        type: String,
        default: Date.now()
    }


});

UserSchema.methods.encryptPassword = function(password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

UserSchema.methods.checkPassword = function(password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

var User = mongoose.model('User', UserSchema);

User.schema.path('email').validate(function(value){

    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value);

}, 'Invalid email');

exports.User = User;