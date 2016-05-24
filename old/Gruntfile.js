/// <vs SolutionOpened='serve:dev' />
var path = require('path'),
    dateFormat = require('dateformat'),
    buildToken = require('./build/keygen.js');

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-angular-templates');
    // grunt.loadNpmTasks('grunt-injector');

    grunt.registerTask('default', ['serve:dev']);

    var config = {
        folders: {
            // source folder
            source: 'src',
            // distribution folder (production, UAT environements)
            distribution: 'dist',
            // development folder (dev, and local environements)
            develop: 'dev',
            // javascript folder
            js: 'js',
            // css folder
            css: 'css',
            // test folder
            test: 'test',
            // vendor source folder
            vendors: 'bower_components'
        }
        //,
        //patterns: {
        //    // application file patterns
        //    app: {
        //        js: [
        //           folders.source + '/**/*.mdl.js',
        //           folders.source + '/**/*.js'
        //        ],
        //        units: [
        //            folders.source + '/**/*.spec.js'
        //        ],
        //        configs: [
        //            folders.source + '/**/*.config.*.js'
        //        ],
        //        e2e: [
        //            folders.source + '/**/*.e2e.js'
        //        ],
        //        tpls: [
        //            folders.source + '/**/*.html'
        //        ],
        //        css: [
        //            folders.source + '/**/*.css'
        //        ],
        //        scss: [
        //            folders.source + '/**/*.scss'
        //        ],
        //        json: [
        //            folders.source + '/**/*.json'
        //        ]
        //    },

        //    // vendor file patterns
        //    vendors: {
        //        js: [
        //           folders.vendors + '/angular/angular.js',
        //           folders.vendors + '/angular-animate/angular-animate.js',
        //           folders.vendors + '/angular-messages/angular-messages.js',
        //           folders.vendors + '/angular-translate/angular-translate.js',
        //           folders.vendors + '/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        //           folders.vendors + '/zxcvbn/dist/zxcvbn.js'
        //        ],
        //        css: [
        //            folders.vendors + '/bootstrap/dist/css/bootstrap.css'
        //        ]
        //    }

    };

    function buildPackageName() {
        var data = grunt.file.readJSON("package.json");
        data.buildName = data.name + '_' + buildToken;
        return data;
    }

    config.pkg = buildPackageName(),

    // clean up folders
        config.clean = [
            '<%= folders.develop %>',
            '<%= folders.distribution %>',
            '<%= folders.test %>'
        ];

    //// copy files from source to destinations
    //tasks.copy = {
    //    all: {
    //        files: [
    //            {
    //                src: [
    //                    '<%= patterns.js %>',
    //                    '<%= patterns.configs %>',
    //                    '<%= patterns.json %>'
    //                ],
    //                dest: '<%= folders.develop %>',
    //                nonull: true,
    //                expand: true
    //            },
    //            {
    //                src: [
    //                    '<%= patterns.configs %>',
    //                    '<%= patterns.json %>'
    //                ],
    //                dest: '<%= folders.distribution %>',
    //                nonull: true,
    //                expand: true
    //            },
    //            {
    //                src: ['<%= vendors.css %>'],
    //                dest: '<%= css_dir %>',
    //                nonull: true,
    //                flatten: true,
    //                expand: true
    //            },
    //            {
    //                src: ['<%= vendors.js %>'],
    //                dest: '<%= js_dir %>',
    //                nonull: true,
    //                flatten: true,
    //                expand: true
    //            }
    //        ]
    //    }
    //};


    //// Convert (vender and application) sass files to css, and move to develop folder
    //tasks.sass = {
    //    application:
    //    {
    //        src: ['<%= patterns.scss %>'],
    //        dest: '<%= folders.develop %>/<%= folders.css %>/app_<%= buildToken %>.css',
    //        options: {
    //            compile: true,
    //            compress: false,
    //            noUnderscores: false,
    //            noIDs: false,
    //            zeroUnits: false
    //        }
    //    }
    //};

    //tasks.watch = {
    //        all: {
    //            files: [
    //                '<%= patterns.js %>',
    //                '<%= patterns.units %>',
    //                '<%= patterns.configs %>',
    //                '<%= patterns.e2e %>',
    //                '<%= patterns.tpls %>',
    //                '<%= patterns.css %>',
    //                '<%= patterns.json %>'
    //            ],
    //            options: {
    //                spawn: false,
    //                livereload: true
    //            },
    //            tasks: ['copy:all', 'less:local', 'injector:appjs', 'injector:appcss', 'injector:unitTestRunner']
    //        }
    //};

    //tasks.build = {
    //        tasks: [
    //            'clean'
    //         //   'sass',
    //         //   'copy',
    //         //   'injector'
    //        ]
    //};

    grunt.config.init(config);
    //grunt.registerMultiTask('build', 'Builds project', function () {
    //    grunt.task.run(this.data.tasks);
    //});
}