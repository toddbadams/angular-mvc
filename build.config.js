/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    // javascript directory
    js_dir: 'dist/js',
    // css directory
    css_dir: 'dist/css',
    // test directory
    test_dir: 'test',

   // application file patterns
    app: {
        js: [
            'src/**/*.mdl.js',
            'src/**/*.js',
            '!src/cfe.config.ci.js'
        ],
        nounits: [
            '!src/**/*.spec.js',
            '!src/**/*.e2e.js'
        ],
        units: [
            'src/**/*.spec.js'
        ],
        e2e: [
            'src/**/*.e2e.js'
        ],
        tpls: [
            'src/**/*.html',
            '!src/*.html'
        ],
        sass: ['src/less/main.sass']
    },

    // vendor file patterns
    vendors: {
        js: [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/angular-translate/angular-translate.js',
            'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
            'bower_components/zxcvbn/dist/zxcvbn.js'
        ],
        css: [
            'bower_components/bootstrap/dist/css/bootstrap.css'
        ],
        units: {
            pre: [
            ],
            post: [
            ]
        },
        unitscss: [
        ]
    }
};
