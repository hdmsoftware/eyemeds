angular.module('app.routes', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardController'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'views/register.html',
                controller: 'UserController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'UserController'
            })


    });