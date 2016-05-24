var buildToken = require('./build/keygen.js'),
    jshint = require('./build/jshint.js'),
    patterns = require('./build/patterns.js'),
    watch = require('./build/watch.js'),
    clean = require('./build/clean.js'),
    copy = require('./build/copy.js');

module.exports = function (grunt) {
    var config = {
            jshint: jshint.task(grunt),
            watch: watch.task(grunt, ['jshint']),
            clean: clean.task(grunt),
            copy: copy.task(grunt)
        },
        buildSteps = [
            'clean',
            'jshint',
            'copy:develop',
            'watch'
        ];

    grunt.initConfig(config);
    grunt.registerTask('default', buildSteps);
};