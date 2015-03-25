'use strict';

var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({ pattern: ['gulp-*', 'run-sequence'] });
var browserSync = require('browser-sync');
var argv = require('yargs').argv;


function runProtractor(done) {

  gulp.src('e2e/**/*.js')
    .pipe(plugins.protractor.protractor({
      configFile: 'protractor.conf.js',
      args: ['--params.env', argv.env || 'development']
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}


// Downloads the selenium webdriver
/* jshint ignore:start */
gulp.task('webdriver-update', plugins.protractor.webdriver_update);
gulp.task('webdriver-standalone', plugins.protractor.webdriver_standalone);
/* jshint ignore:end */


// Run Protractor
gulp.task('run-protractor', runProtractor);


gulp.task('e2e', function(done) {

  if (!argv.env || argv.env === 'development') {
    // Run local server to host the dist/ dir
    plugins.runSequence(['serve:e2e-dist', 'webdriver-update'], 'run-protractor', done);
  }
  else {
    // Run protractor against remote server (e.g., SauceLab)
    plugins.runSequence('webdriver-update', 'run-protractor', done);
  }
});


// e2e test using the src dir
gulp.task('e2e:src', ['serve:e2e', 'webdriver-update'], runProtractor);
