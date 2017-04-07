// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');

// This stuff is for the jshint notifications
var map = require('map-stream');
var stylish = require('jshint-stylish');

// Lint Task
gulp.task('lint', [], function () {
    return gulp.src(['./**/*.js', '!./node_modules/**', '!./ve/**/*'])
        .pipe(jshint({ node: true, globals: {} }))
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});
