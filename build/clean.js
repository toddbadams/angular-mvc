/**
 * grunt watch
 */

var
    patterns = require('./patterns.js'),
    exports = module.exports = {};

exports.task = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    return [
        patterns.folders.distribution,
        patterns.folders.develop
    ];
}; 