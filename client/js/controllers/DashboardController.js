angular.module('EyemedsApp')
    .controller('DashboardController', ['$scope', '$location', 'Auth', function($scope, $location, Auth){

        $scope.user = {};

        Auth.getUserInfo().then(function(resp){

            $scope.user = resp.user;

        });

        $scope.logout = function() {

          Auth.logout();
          $location.path('/login');

        };

    }]);