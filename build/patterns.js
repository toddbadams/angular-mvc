/**
 * This file/module contains all configuration for the build process.
 */

var exports = module.exports = {},
    folders = {
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
        vendors: 'bower_components',
        // build JS folder
        buildJs: 'build'
    };

// application file patterns
exports.app = {
    js: [
        folders.source + '/**/*.mdl.js',
        folders.source + '/**/*.js'
    ],
    configs: [
        folders.source + '/**/*.config.*.js'
    ],
    tpls: [
        folders.source + '/**/*.html'
    ],
    css: [
        folders.source + '/**/*.css'
    ],
    scss: [
        folders.source + '/**/*.scss'
    ],
    json: [
        folders.source + '/**/*.json'
    ]
};

// test file patterns
exports.test = {
    units: [
        folders.source + '/**/*.spec.js'
    ],
    e2e: [
        folders.source + '/**/*.e2e.js'
    ]
};

// build file patterns
exports.build = {
    js: [
        'Gruntfile.js',
        folders.buildJs + '/**/*.js'
    ]
};

// vendor file patterns
exports.vendors = {
    js: [
        folders.vendors + '/angular/angular.js',
        folders.vendors + '/angular-animate/angular-animate.js',
        folders.vendors + '/angular-messages/angular-messages.js',
        folders.vendors + '/angular-translate/angular-translate.js',
        folders.vendors + '/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        folders.vendors + '/zxcvbn/dist/zxcvbn.js'
    ],
    css: [
        folders.vendors + '/bootstrap/dist/css/bootstrap.css'
    ]
};

exports.folders = folders;
