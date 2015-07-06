module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            all: ['client/js/**/*.js', 'server/**/*.js']
        },

        nodemon: {
            dev: {
                script: 'server.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-nodemon');

    // register the nodemon task when we run grunt
    grunt.registerTask('default', ['nodemon', 'jshint']);

};