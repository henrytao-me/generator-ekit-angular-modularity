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
            themes: {
                files: ['<%= yeoman.app %>/<%= yeoman.themeDir %>/**/*.{css,less}'],
                tasks: ['copy:themes', 'less:themes', 'concat:themes']
            },
            common_styles: {
                files: ['<%= yeoman.app %>/<%= yeoman.common %>/**/*.{css,less}'],
                tasks: ['copy:common', 'less:common', 'concat:common_styles']
            },
            common_scripts: {
                files: ['<%= yeoman.app %>/<%= yeoman.common %>/**/*.js'],
                tasks: ['copy:common', 'less:common', 'concat:common_scripts']
            },
            addon_styles: {
                files: ['<%= yeoman.app %>/<%= yeoman.addon %>/**/*.{css,less}'],
                tasks: ['copy:addon', 'less:addon', 'concat:addon_styles']
            },
            addon_scripts: {
                files: ['<%= yeoman.app %>/<%= yeoman.addon %>/**/*.js'],
                tasks: ['copy:addon', 'less:addon', 'concat:addon_scripts']
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
        concurrent: {
            copy: ['copy:themes', 'copy:common', 'copy:addon'],
            server: ['less:themes', 'less:common', 'less:addon'],
            // test: ['coffee', 'less', 'copy:styles'],
            // dist: ['coffee', 'less', 'copy:styles', 'imagemin', 'svgmin', 'htmlmin']
        },
        copy: {
            // dist: {
            //     files: [{
            //         expand: true,
            //         dot: true,
            //         cwd: '<%= yeoman.app %>',
            //         dest: '<%= yeoman.dist %>',
            //         src: ['*.{ico,png,txt}', '.htaccess', 'bower_components/**/*', 'images/{,*/}*.{gif,webp}', 'styles/fonts/*']
            //     }, {
            //         expand: true,
            //         cwd: '.tmp/images',
            //         dest: '<%= yeoman.dist %>/images',
            //         src: ['generated/*']
            //     }]
            // },
            themes: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/<%= yeoman.themeDir %>',
                    src: ['**/*.*', '!**/*.less', '!**/*.css'],
                    dest: '.tmp/themes/'
                },  {
                    expand: true,
                    cwd: '<%= yeoman.app %>/<%= yeoman.themeDir %>',
                    src: ['**/*.css'],
                    dest: '.tmp/themes/.tmp/themes/'
                }]
            },
            common: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/<%= yeoman.common %>',
                    src: ['**/*.css'],
                    dest: '.tmp/styles/.tmp/common/'
                }, {
                    expand: true,
                    cwd: '<%= yeoman.app %>/<%= yeoman.common %>',
                    src: ['**/*.js'],
                    dest: '.tmp/scripts/.tmp/common'
                }]
            },
            addon: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/<%= yeoman.addon %>',
                    src: ['**/*.css'],
                    dest: '.tmp/styles/.tmp/addon/'
                }, {
                    expand: true,
                    cwd: '<%= yeoman.app %>/<%= yeoman.addon %>',
                    src: ['**/*.js'],
                    dest: '.tmp/scripts/.tmp/addon/'
                }]
            }
        },
        less: {
            themes: {
                files: {
                    '.tmp/themes/.tmp/css.css': ['<%= yeoman.app %>/<%= yeoman.themeDir %>/css.less']
                }
            },
            common: {
                files: {
                    '.tmp/styles/.tmp/common.css': ['<%= yeoman.app %>/<%= yeoman.common %>/*/*/css.less']
                }
            },
            addon: {
                files: {
                    '.tmp/styles/.tmp/addon.css': ['<%= yeoman.app %>/<%= yeoman.addon %>/*/css.less']
                }
            }
        },
        concat: {
            themes: {
                separator: ' ',
                src: ['.tmp/themes/.tmp/*.css', '.tmp/themes/.tmp/themes/**/*.css'],
                dest: '.tmp/themes/css.css'
            },
            common_styles: {
                separator: ' ',
                src: ['.tmp/styles/.tmp/common.css', '.tmp/styles/.tmp/common/**/*.css'],
                dest: '.tmp/styles/common.css'
            },
            addon_styles: {
                separator: ' ',
                src: ['.tmp/styles/.tmp/addon.css', '.tmp/styles/.tmp/addon/**/*.css'],
                dest: '.tmp/styles/addon.css'
            },
            common_scripts: {
                separator: ';',
                src: ['.tmp/scripts/.tmp/common/**/*.js'],
                dest: '.tmp/scripts/common.js'
            },
            addon_scripts: {
                separator: ';',
                src: ['.tmp/scripts/.tmp/addon/**/*.js'],
                dest: '.tmp/scripts/addon.js'
            },
        },
        autoprefixer: {
            options: ['last 1 version'],
            // dist: {
            //     files: [{
            //         expand: true,
            //         cwd: '.tmp/styles/',
            //         src: '**/*.css',
            //         dest: '.tmp/styles/'
            //     }]
            // }
        },
        env: {
            dev: {
                NODE_ENV: 'development'
            },
            dist: {
                NODE_ENV: 'production'
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
                    bases: ['.tmp', '<%= yeoman.app %>/<%= yeoman.addon %>', '<%= yeoman.app %>'],
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
        open: {
            server: {
                url: 'http://127.0.0.1:<%= express.options.port %>'
            }
        },





       
        
        
        

        











        
        
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', '<%= yeoman.app %>/scripts/{,*/}*.js']
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

        grunt.task.run([
            'clean:server', 
            'concurrent:copy',              // 'copy:themes', 'copy:common', 'copy:addon'
            'concurrent:server',            // 'less:themes', 'less:common', 'less.addon'
            'concat:themes',
            'concat:common_styles',
            'concat:common_scripts',
            'concat:addon_styles',
            'concat:addon_scripts',
            'autoprefixer',
            'env:dev', 
            'express:dev', 
            'open', 
            'watch'
        ]);

        // grunt.task.run(['clean:server', 'concurrent:server', 'autoprefixer', 'concat', 'env:dev', 'express:dev', 'open', 'watch']);
    });

    grunt.registerTask('test', ['clean:server', 'concurrent:test', 'autoprefixer', 'connect:test', 'karma']);

    grunt.registerTask('build', ['clean:dist', 'useminPrepare', 'concurrent:dist', 'autoprefixer', 'concat', 'copy:dist', 'ngmin', 'cssmin', 'uglify', 'rev', 'usemin']);

    grunt.registerTask('default', ['jshint', 'test', 'build']);
};