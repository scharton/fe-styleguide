'use strict';

var gulp = require('gulp');

/**
 * Start accordant Gulp tasks whenever changes occur to files with matched patterns.
 */
gulp.task('watch', ['styles', 'scripts'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss', ['styles']);
  gulp.watch('src/{app,components,overrides}/**/*.js', ['injector:js']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
