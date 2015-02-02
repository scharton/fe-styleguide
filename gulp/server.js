'use strict';

var gulp = require('gulp');

var util = require('util');
var browserSync = require('browser-sync');

/**
 * Synchronize browser when the serving files change
 */
function browserSyncInit(baseDir, files, browser) {

  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if (baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1)) {
    routes = {
      // Should be '/bower_components': '../bower_components'
      // Waiting for https://github.com/shakyShane/browser-sync/issues/308
      '/bower_components': 'bower_components'
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      routes: routes
    },
    browser: browser
  });
}


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


gulp.task('serve:e2e', ['wiredep', 'styles', 'injector:js'], function () {
  browserSyncInit(['src', '.tmp'], null, []);
});


gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit('dist', null, []);
});
