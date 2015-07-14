angular.module('AuthService', [])

    .factory('Auth', ['$http', '$q', 'AuthToken', function($http, $q, AuthToken){

        var authFactory = {};

        authFactory.login = function(credentials) {

            var deferred = $q.defer();

            $http.post('/api/login', {
                email: credentials.email,
                password: credentials.password
            })
                .success(function(response){

                    AuthToken.setToken(response.token);
                    deferred.resolve(response);

                })
                .error(function(error){

                    deferred.reject(error);

                });


            return deferred.promise

        };

        authFactory.logout = function() {

            AuthToken.setToken();

        };

        authFactory.register = function(user) {

            var deferred = $q.defer();

            $http.post('/api/register', {
                email: user.email,
                state: user.state,
                address: user.address,
                zipCode: user.zipCode,
                city: user.city,
                password: user.password,
                name: user.name
            })
                .success(function(response){

                    AuthToken.setToken(response.token);
                    deferred.resolve(response);

                })
                .error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;

        };

        authFactory.getUserInfo = function() {

            var deferred = $q.defer();

            $http.get('/api/getUserInfo')
                .success(function(response){
                    deferred.resolve(response);
                })
                .error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;

        };

        authFactory.isLoggedIn = function() {

            return AuthToken.getToken();

        };


        return authFactory;

    }])

    .factory('AuthToken', ['$window', function($window){

        var authTokenFactory = {};

        authTokenFactory.getToken = function() {

            return $window.localStorage.getItem('token');

        };

        authTokenFactory.setToken = function(token) {

            if(token) {
                $window.localStorage.setItem('token', token);
            }
            else {
                $window.localStorage.removeItem('token');
            }

        };

        return authTokenFactory;

    }])

    .factory('AuthInterceptor', ['$q', '$location', 'AuthToken' , function($q, $location, AuthToken){

        var interceptorFactory = {};

        interceptorFactory.request = function(config) {

            var token = AuthToken.getToken();

            if(token) {
                config.headers['x-access-token'] = token;
            }

            return config;

        };

        interceptorFactory.responseError = function(response) {

            if(response.status == 403) {
                AuthToken.setToken();
                $location.path('/login');
            }

            return $q.reject(response);

        };


        return interceptorFactory;

    }]);

