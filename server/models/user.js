var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    email: {
        type: String,
        index: { unique: true },
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
    password: {
        type: String,
        required: '{PATH} is required!'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', function(next){
    var user = this;

    if(!user.isModified('password')) {
        console.log('modified password');
        return next();
    }

    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err) {
            return next(err);
        }

        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = function(password) {
    var user = this;

    return bcrypt.compareSync(password, user.password);
};

var User = mongoose.model('User', UserSchema);

module.exports.User = User;