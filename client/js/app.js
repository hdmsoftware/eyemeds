angular.module('EyemedsApp', [
    'app.routes',
    'AuthService',
    'ui.router',
    //'ngAnimate',
    'ui.calendar',
    'chart.js',
    'textAngular',
    'gridshore.c3js.chart',
    'angular-growl',
    'growlNotifications',
    'angular-loading-bar',
    'angular-progress-button-styles',
    'pascalprecht.translate',
    'ui.bootstrap'
    ])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.latencyThreshold = 5;
        cfpLoadingBarProvider.includeSpinner = false;
    }])
    .config(function(progressButtonConfigProvider) {
        progressButtonConfigProvider.profile('login', {
            style: 'shrink',
            direction: 'vertical'
        });
    })
    .config(function($httpProvider) {

        $httpProvider.interceptors.push('AuthInterceptor');

    })
    .config(function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'lang/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');

    });

