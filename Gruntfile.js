/// <vs SolutionOpened='serve:dev' />
var path = require('path'),
    dateFormat = require('dateformat');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-injector');

    grunt.registerTask('default', ['serve:dev']);

    var userConfig = require('./build.config.js');

    var buildToken = dateFormat(new Date(), 'yyyy_mm_dd_HHMM'),
        taskConfig = {
            pkg: (function () {
                var data = grunt.file.readJSON("package.json");
                data.buildName = data.name + '_' + buildToken;
                return data;
            }()),

            // Convert sass files to css and move to build folder
            sass: {
                local:
                {
                    src: ['<%= app.scss %>'],
                    dest: '<%= css_dir %>/<%= pkg.name %>.css',
                    options: {
                        compile: true,
                        compress: false,
                        noUnderscores: false,
                        noIDs: false,
                        zeroUnits: false
                    }
                }
            },

            injector: {
                index_local_js: {
                    options: {
                        addRootSlash: true
                    },
                    files: {
                        'index.html': [
                            '<%= js_dir %>/angular.js',
                            '<%= js_dir %>/angular-translate.js',
                            '<%= js_dir %>/*.js',
                            '<%= js_dir %>/**/*.js',
                            '!<%= js_dir %>/src/cfe.mdl.js'
                        ]
                    }
                },
                index_local_css: {
                    options: {
                        addRootSlash: true
                    },
                    files: {
                        'index.html': [
                            '<%= css_dir %>/*.css'
                        ]
                    }
                },
                unitTestRunner: {
                    options: {
                        ignorePath: ['ext/'],
                        addRootSlash: true
                    },
                    files: {
                        '<%= test_dir %>/index.html':[
                            userConfig.vendors.js,
                            userConfig.vendors.units.pre,
                            'karma/unittest-bootstrap-bdd.js',
                            userConfig.vendors.units.post,
                            '<%= js_dir %>/src/**/*.js',
                            'src/**/*.spec.js'
                        ]
                    }
                }
            },
            clean: {
                options: {
                    force: true
                },
                app: ['<%= css_dir %>', '<%= js_dir %>', '<%= test_dir%>']
            },
            copy: {
                app: {
                    files: [
                        {
                            src: [
                                '<%= app.js %>',
                                '<%= app.nounits %>',
                                '<%= app.tpls %>'
                            ],
                            dest: '<%= js_dir %>',
                            nonull: true,
                            expand: true
                        },
                        {
                            src: ['<%= vendors.css %>'],
                            dest: '<%= css_dir %>',
                            nonull: true,
                            flatten: true,
                            expand: true
                        },
                        {
                            src: ['<%= vendors.js %>'],
                            dest: '<%= js_dir %>',
                            nonull: true,
                            flatten: true,
                            expand: true
                        }
                    ]
                },

                ciconfig: {
                    src: 'src/cfe.config.ci.js',
                    dest: 'js/src/cfe.config.js'
                },

                unitTestRunner: {
                    files: [
                        {
                            src: ['runner.html'],
                            dest: '<%= test_dir %>/index.html'
                        }
                    ]
                }
            },
            watch: {
                local_dev: {
                    files: [
                        '<%= app.js %>',
                        '<%= app.tpls %>',
                        'src/**/*.less',
                        'src/**/*.json'
                    ],
                    options: {
                        spawn: false,
                        livereload: true
                    },
                    tasks: ['copy:app', 'less:local', 'injector:index_local_js', 'injector:index_local_css', 'injector:unitTestRunner']
                }
            },

            build: {
                dev: {
                    tasks: ['clean', 'copy:app', 'copy:unitTestRunner', 'less:local', 'injector:index_local_js', 'injector:index_local_css', 'injector:unitTestRunner']
                },

                ci: {
                    tasks: ['clean', 'copy:app', 'copy:ciconfig', 'less:local', 'injector:index_local_js', 'injector:index_local_css']
                }
            },

            serve: {
                dev: {
                    tasks: ['build:dev', 'watch:local_dev']
                }
            },

            test: {
                dev: {
                    tasks: ['jshint', 'karma:dev']
                }
            }
        };




    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    grunt.registerMultiTask('build', 'Builds project', function () {
        grunt.task.run(this.data.tasks);
    });

    grunt.registerMultiTask('serve', 'Builds project and starts Watch', function () {
        grunt.task.run(this.data.tasks);
    });

    grunt.registerMultiTask('test', 'Test project', function () {
        grunt.task.run(this.data.tasks);
    });

    grunt.registerTask('e2e:dev', ['protractor:dev']);
    grunt.registerTask('e2e:ci', ['protractor:ci']);
    grunt.registerTask('e2e:ci_add', ['protractor:ci_add']);

};