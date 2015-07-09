var User = require('../models/User').User;

exports.login = function (req, res) {

    console.log(req.body.email);
    console.log(req.body.password);

    //var username = req.body.username,
    //    password = req.body.password,
    //    isAuthenticated = req.body.isAuthenticated;
    //
    //if(!isAuthenticated || isAuthenticated === 'false') {
    //    User.authenticate(username, password, function (err, data) {
    //        if (err) {
    //            res.status(err.status).send(err.message);
    //        }
    //        req.session.user = {
    //            fullname: data.fullname,
    //            id: data.pmcId
    //        };
    //        res.send(req.session.user);
    //    });
    //} else {
    //    res.send(req.session.user);
    //}
};

exports.signup = function(req, res) {

};