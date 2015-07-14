angular.module('EyemedsApp')
    .controller('UserController', ['$scope', '$location', 'Auth', function($scope, $location, Auth){

        $scope.register = function(user) {

            Auth.register(user).then(function(resp){

                if(resp.success) {

                    Auth.login({email: resp.user.email, password: resp.user.password}).then(function(resp){

                        if(resp.success) {
                            $location.path('/dashboard');
                        }

                    });
                }

            });

        };

        $scope.login = function(credentials) {

            Auth.login(credentials).then(function(resp){

                if(resp.success) {
                    $location.path('/dashboard');
                }

            });

        }

    }]);