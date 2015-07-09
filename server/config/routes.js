var userController = require('../controllers/userController');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('./client/views/index.html');
    });

    app.post('/api/login', userController.login);
    app.post('/api/signup', userController.signup);

};