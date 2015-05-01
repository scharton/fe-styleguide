'use strict';

var options;

require('fe-gulp')(function(opts) {
  opts.angular = {
    module: 'styleguide'
  };

  options = opts;

  return opts;
});


var gulp = require('gulp');

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
