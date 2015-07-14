module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            build: {
                files: {
                    'client/dist/styles/app-blue.css': 'client/styles/app-blue.less'
                }
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'client/styles/fonts/',
                        src: ['**'],
                        dest: 'client/dist/fonts'
                    },
                    {
                        expand: true,
                        cwd: 'libs/bootstrap/fonts/',
                        src: ['**'],
                        dest: 'client/dist/fonts'
                    }

                ]
            }
        },

        watch: {
            css: {
                files: ['client/styles/**/*.less'],
                tasks: ['less']
            }
        },

        nodemon: {
            dev: {
                script: 'server.js'
            }
        },

        // run watch and nodemon at the same time
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['less', 'copy', 'concurrent']);

};