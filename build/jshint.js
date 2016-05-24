﻿/**
 * Js hint options from 
 *   https://github.com/johnpapa/angular-styleguide/tree/master/a1#js-hint
 */

var
    patterns = require('./patterns.js'),
    exports = module.exports = {};

exports.task = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    return {
        files: [
            patterns.app.js,
            patterns.app.configs,
            patterns.test.units,
            patterns.test.e2e,
            patterns.build.js
        ],
        options: {
            bitwise: true,
            camelcase: true,
            curly: true,
            eqeqeq: true,
            esversion: 6,
            forin: true,
            freeze: true,
            immed: true,
            indent: 4,
            latedef: 'nofunc',
            newcap: true,
            noarg: true,
            noempty: true,
            nonbsp: true,
            nonew: true,
            plusplus: false,
            quotmark: 'single',
            undef: true,
            unused: false,
            strict: false,
            maxparams: 10,
            maxdepth: 5,
            maxstatements: 40,
            maxcomplexity: 8,
            maxlen: 120,
            asi: false,
            boss: false,
            debug: false,
            eqnull: true,
            esnext: false,
            evil: false,
            expr: false,
            funcscope: false,
            globalstrict: false,
            iterator: false,
            lastsemic: false,
            laxbreak: false,
            laxcomma: false,
            loopfunc: true,
            maxerr: 50,
            moz: false,
            multistr: false,
            notypeof: false,
            proto: false,
            scripturl: false,
            shadow: false,
            sub: true,
            supernew: false,
            validthis: false,
            noyield: false,
            browser: true,
            node: true,

            globals: {
                angular: false,
                $: false,
                Firebase: false
            }
        }
    };
};
