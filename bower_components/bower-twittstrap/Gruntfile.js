'use strict';

module.exports = function(grunt) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['libs/js_extend.js', 'node_modules/underscore/underscore-min.js', 'libs/underscore_extend.js', 'libs/Class.js'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        less: {
            all: {
                // options: {
                //     paths: ["assets/css"]
                // },
                files: {
                    "build/bootstrap.css": "build/bootstrap.less",
                    "build/bootstrap-responsive.css": "build/bootstrap-responsive.less",
                }
            }
        },
        copy: {
            js: {
                files: {
                    "build/bootstrap.js": "twittstrap/assets/js/bootstrap.js",
                    "build/bootstrap.min.js": "twittstrap/assets/js/bootstrap.min.js"
                }
            }
        },
        cssmin: {
            css: {
                options: {
                    keepSpecialComments: 0
                },
                files: {
                    'build/bootstrap.min.css': "build/bootstrap.css",
                    'build/bootstrap-responsive.min.css': "build/bootstrap-responsive.css"
                }
            }
        }
    });

    // Grunt task(s)

    grunt.registerTask('build', ['less', 'copy', 'cssmin']);

    grunt.registerTask('default', ['build']);

};