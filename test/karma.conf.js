// Karma configuration
module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    //basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      '../client/libs/angular/angular.js',
      '../client/libs/angular-mocks/angular-mocks.js',
      '../client/libs/ui-router/release/angular-ui-router.js',
      '../client/libs/angular-animate/angular-animate.js',
      '../client/libs/fullcalendar/fullcalendar.js',
      '../client/libs/angular-ui-calendar/src/calendar.js',
      '../client/libs/Chart.js/Chart.js',
      '../client/libs/angular-chart.js/dist/angular-chart.js',
      '../client/libs/d3/d3.js',
      '../client/libs/c3/c3.js',
      '../client/libs/c3-angular/c3js-directive.js',
      '../client/libs/angular-growl/build/angular-growl.js',
      '../client/libs/angular-loading-bar/build/loading-bar.js',
      '../client/libs/angular-growl-notifications/dist/angular-growl-notifications.js',
      '../client/libs/rangy/rangy-core.js',
      '../client/libs/rangy/rangy-classapplier.js',
      '../client/libs/rangy/rangy-highlighter.js',
      '../client/libs/rangy/rangy-selectionsaverestore.js',
      '../client/libs/rangy/rangy-serializer.js',
      '../client/libs/rangy/rangy-textrange.js',
      '../client/libs/textAngular/src/textAngular.js',
      '../client/libs/textAngular/src/textAngular-sanitize.js',
      '../client/libs/textAngular/src/textAngularSetup.js',
      '../client/libs/perfect-scrollbar/js/perfect-scrollbar.js',
      '../client/libs/classie/classie.js',
      '../client/libs/angular-progress-button-styles/dist/angular-progress-button-styles.min.js',
      '../client/libs/angular-translate/angular-translate.js',
      '../client/libs/angular-translate-loader-url/angular-translate-loader-url.js',
      '../client/libs/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      '../client/libs/angular-resource/angular-resource.js',
      // endbower
      '../client/scripts/**/*.js',
      //'../test/mock/**/*.js',
      '../test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
