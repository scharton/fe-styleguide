'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');
require('./bower_components/fe-env/dist/gulp/setenv');

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
