/**
 * Copy 
 */

var
    patterns = require('./patterns.js'),
    exports = module.exports = {};

exports.task = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    return {
        develop: {
            files: [
              {
                  expand: true,
                  src: patterns.app.js,
                  dest: patterns.folders.develop
              }
            ]
        },
        distribution: {
            files: [
                {
                    expand: true,
                    src: patterns.app.js,
                    dest: patterns.folders.develop
                }
            ]
        }
    };
};