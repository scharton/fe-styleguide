'use strict';

var gulp = require('gulp');

/**
 * Start accordant Gulp tasks whenever changes occur to files with matched patterns.
 */
gulp.task('watch', ['wiredep', 'styles', 'injector:js'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss', ['styles']);
  gulp.watch('src/{app,components}/**/*.js', ['injector:js']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
