var gulp = require('gulp');
var config = require('../config');
var inject = require('gulp-inject');
var bowerFiles = require('main-bower-files');
var dedupe = require('gulp-dedupe');
var concat = require('gulp-concat');
var template = require('gulp-template-compile');
var browserify = require('gulp-browserify');

function buildTemplates () {
    return gulp.src(config.paths.templates)
        .pipe(template())
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(config.paths.build));
}

function buildVendor () {
    return gulp.src(bowerFiles())
        .pipe(gulp.dest(config.paths.build))
}

function buildApp () {
    return gulp.src(config.paths.app, { read: false })
        .pipe(browserify({
            insertGlobals : true,
            debug : true
        }))
        .pipe(gulp.dest(config.paths.build));
}

module.exports = function() {
  return gulp.src(config.paths.main)
      .pipe(inject(buildVendor(), { name: 'bower'}))
      .pipe(inject(buildTemplates(), { name: 'templates'}))
      .pipe(inject(buildApp()))
      .pipe(gulp.dest(config.paths.build));
};