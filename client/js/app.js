var app = angular.module('eyemedsApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'views/error.html'
        });

});