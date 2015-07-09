'use strict';

angular.module('EyemedsApp').controller('LoginCtrl', ['$scope', '$location', '$q', 'UserService', function($scope, $location, $q, UserService){

	$scope.login = function(credentials) {

		UserService.login(credentials).then(function(response) {

			console.log(response)


		});

	}



}]);