/**
 * grunt watch
 */

var
    patterns = require('./patterns.js'),
    exports = module.exports = {};

exports.task = function (grunt, tasks) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    return {
        files: [
            patterns.app.js
        ],
        tasks: tasks
    };
};