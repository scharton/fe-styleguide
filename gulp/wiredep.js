'use strict';

var gulp = require('gulp');

/**
 * Wire bower components to index.html.
 *
 * Modernizer is included manually in index.html, so we exclude it from auto-wiring.
 */
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  return gulp.src('src/index.html')
    .pipe(wiredep({
      directory: 'bower_components',
      exclude: [/modernizr/]
    }))
    .pipe(gulp.dest('src'));
});
