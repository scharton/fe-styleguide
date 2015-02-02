'use strict';

var gulp = require('gulp');

/**
 * Wire bower components to index.html.
 *
 * Modernizer and fe-bootstrap are included manually in index.html, so we
 * exclude it from auto-wiring.
 *
 * Also, angular-bootstrap already carries the bootstrap JS, so we don't need to
 * include Bootstrap scripts.
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
