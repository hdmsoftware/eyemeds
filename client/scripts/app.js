'use strict';

angular.module('AniTheme', [

        'ui.router',
        'pascalprecht.translate',
        'ui.bootstrap'

    ])
    .config(function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'languages/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');

    })
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'views/signup.html'
            })

    });