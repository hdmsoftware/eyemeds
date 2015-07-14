var userController = require('../controllers/userController');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var bodyParser = require('body-parser');

var secretToken = config.secretToken;

module.exports = function(app, express) {

    var apiRouter = express.Router();

    apiRouter.post('/register', userController.register);
    apiRouter.post('/login', userController.login);

    apiRouter.use(function(req, res, next) {

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, secretToken, function(err, decoded) {

                if (err) {
                    res.status(403).send({
                        success: false,
                        message: 'Failed to authenticate token.'
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;

                    next(); // make sure we go to the next routes and don't stop here
                }
            });

        } else {

            // if there is no token
            // return an HTTP response of 403 (access forbidden) and an error message
            res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }
    });

    apiRouter.get('/getUserInfo', userController.getUserInfo);

    return apiRouter;

};