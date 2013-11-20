// Generated on 2013-11-17 using generator-angular 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        yeoman: {
            // configurable paths
            api: 'api',
            app: 'app',
            dist: 'dist',
            addon: 'addons',
            common: 'common',
            themeDir: 'themes/default'
        },
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/{,*/}*.coffee'],
                tasks: ['coffee:test']
            },
            less: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.less'],
                tasks: ['less', 'autoprefixer']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            }
        },
        autoprefixer: {
            options: ['last 1 version'],
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
        express: {
            options: {
                hostname: '*',
                port: 9000
            },
            dev: {
                options: {
                    // static directory or watching directory
                    bases: ['.tmp', '<%= yeoman.app %>'],
                    livereload: 35730,
                    server: 'app.js'
                }
            },
            dist: {
                options: {
                    // static directory or watching directory
                    bases: ['<%= yeoman.dist %>'],
                    server: 'app.js'
                }
            }
        },
        env: {
            dev: {
                NODE_ENV: 'development'
            },
            dist: {
                NODE_ENV: 'production'
            }
        },
        open: {
            server: {
                url: 'http://127.0.0.1:<%= express.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: ['.tmp', '<%= yeoman.dist %>/*', '!<%= yeoman.dist %>/.git*']
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', '<%= yeoman.app %>/scripts/{,*/}*.js']
        },
        coffee: {
            options: {
                sourceMap: true,
                sourceRoot: ''
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/scripts',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/scripts',
                    ext: '.js'
                }]
            },
            test: {
                files: [{
                    expand: true,
                    cwd: 'test/spec',
                    src: '{,*/}*.coffee',
                    dest: '.tmp/spec',
                    ext: '.js'
                }]
            }
        },
        less: {
            styles: {
                files: {
                    '.tmp/styles/main.css': '<%= yeoman.app %>/styles/main.less'
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: ['<%= yeoman.dist %>/scripts/{,*/}*.js', '<%= yeoman.dist %>/styles/{,*/}*.css', '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}', '<%= yeoman.dist %>/styles/fonts/*']
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            // By default, your `index.html` <!-- Usemin Block --> will take care of
            // minification. This option is pre-configured if you do not wish to use
            // Usemin blocks.
            // dist: {
            //   files: {
            //     '<%= yeoman.dist %>/styles/main.css': [
            //       '.tmp/styles/{,*/}*.css',
            //       '<%= yeoman.app %>/styles/{,*/}*.css'
            //     ]
            //   }
            // }
        },
        htmlmin: {
            dist: {
                options: {
                    // removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    // collapseWhitespace: true,
                    // collapseBooleanAttributes: true,
                    // removeAttributeQuotes: true,
                    // removeRedundantAttributes: true,
                    // useShortDoctype: true,
                    // removeEmptyAttributes: true,
                    // removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: ['*.{ico,png,txt}', '.htaccess', 'bower_components/**/*', 'images/{,*/}*.{gif,webp}', 'styles/fonts/*']
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
        concurrent: {
            server: ['coffee:dist', 'less', 'copy:styles'],
            test: ['coffee', 'less', 'copy:styles'],
            dist: ['coffee', 'less', 'copy:styles', 'imagemin', 'svgmin', 'htmlmin']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        ngmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>/scripts',
                    src: '*.js',
                    dest: '<%= yeoman.dist %>/scripts'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/scripts/scripts.js': ['<%= yeoman.dist %>/scripts/scripts.js']
                }
            }
        }
    });

    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'env:dist', 'express:dist', 'express-keepalive']);
        };

        grunt.task.run(['clean:server', 'concurrent:server', 'autoprefixer', 'env:dev', 'express:dev', 'open', 'watch']);
    });

    grunt.registerTask('test', ['clean:server', 'concurrent:test', 'autoprefixer', 'connect:test', 'karma']);

    grunt.registerTask('build', ['clean:dist', 'useminPrepare', 'concurrent:dist', 'autoprefixer', 'concat', 'copy:dist', 'ngmin', 'cssmin', 'uglify', 'rev', 'usemin']);

    grunt.registerTask('default', ['jshint', 'test', 'build']);
};