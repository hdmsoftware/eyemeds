angular.module('EyemedsApp').factory('UserService', function($http, $q){

    var user = {

        login: function(credentials) {

            var deferred = $q.defer();

            $http.post("/api/login", {email: credentials.email, password: credentials.password})
                .success(function(response){
                    deferred.resolve(response);
                })
                .error(function(response){
                    deferred.reject(response);
                });

            return deferred.promise;

        }


    };

    return user;


});