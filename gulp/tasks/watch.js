var gulp = require('gulp');
var watch = require('gulp-watch');

var cfg = require('../config');

function make() {
    gulp.start("build");
}

module.exports = function() {
    make();

    return watch([
        cfg.paths.vendor,
        cfg.paths.app,
        cfg.paths.templates,
        cfg.paths.main
    ], make);
};