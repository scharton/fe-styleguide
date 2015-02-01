'use strict';

var gulp = require('gulp');
var shell = require('gulp-shell');

/**
 * Remove then install required bower components
 */
gulp.task('bower:refresh', shell.task([
  'echo Deleting bower components ...',
  'rm -rf bower_components',
  'echo Installing bower components ...',
  'bower install'
]));
