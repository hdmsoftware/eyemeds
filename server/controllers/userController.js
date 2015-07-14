var User = require('../models/user').User;
var jwt = require('jsonwebtoken');
var config = require('../config/config.js');

exports.register = function(req ,res){

    var user = new User();

    user.email = req.body.email;
    user.name = req.body.name;
    user.state = req.body.state;
    user.city = req.body.city;
    user.address = req.body.address;
    user.zipCode = req.body.zipCode;
    user.password = req.body.password;

    user.save(function(err){

        if(err) {
            if(err.code == 11000) {
                res.json({success: false, message: 'A user with that email already exists'});
            }
            else {
                res.send(err);
            }
        }

        res.json({success: true, user: {email: req.body.email, password: req.body.password}, message: 'User created'});

    });


};

exports.login = function(req, res) {

    User.findOne({
        email: req.body.email
    }, function(err, user){
        if(err) throw err;

        if(!user) {
            res.json({
                success: false,
                message: 'Authentication failed. User not found.'
            });
        }
        else if(user){
            var validPassword = user.comparePassword(req.body.password);
            if(!validPassword) {
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password'
                });
            }
            else {
                var token = jwt.sign({user: user}, config.secretToken, {expiresInMinutes: 1440});

                res.json({
                    success: true,
                    message: 'Enjoy your token',
                    user: user,
                    token: token
                });

            }
        }

    });

};

exports.getUserInfo = function(req, res) {

    res.json({
        success: true,
        user: req.decoded.user
    });

};