var gulp = require('gulp');
var webserver = require('gulp-webserver');
var cfg = require('../config');

module.exports = function Server () {

    var config = {
        livereload: true,
        open: true,
        directoryListing: false
    };

    gulp.src([cfg.paths.build, '.'])
        .pipe( webserver(config) );

};