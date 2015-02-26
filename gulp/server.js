'use strict';

var gulp = require('gulp');

var browserSyncInit = require('../bower_components/fe-env/dist/scripts/server/browser-sync-init');


/**
 * Serve files from the src and .tmp dirs
 */
gulp.task('serve', ['watch'], function () {

  browserSyncInit([
    'src',
    '.tmp'
  ], [
      '.tmp/{app,components}/**/*.css',
      'src/assets/images/**/*',
      'src/*.html',
      'src/{app,components}/**/*.html',
      'src/{app,components}/**/*.js'
    ]);
});


/**
 * Server files from the dist dir
 */
gulp.task('serve:dist', ['build'], function () {
  browserSyncInit('dist');
});


gulp.task('serve:e2e', ['styles', 'scripts'], function () {
  browserSyncInit(['src', '.tmp'], null, []);
});


gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit('dist', null, []);
});
