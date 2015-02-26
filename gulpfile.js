'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');
require('./bower_components/fe-env/dist/scripts/server/gulp');

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
