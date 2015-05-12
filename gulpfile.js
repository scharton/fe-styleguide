'use strict';

var options;

require('fe-gulp')(function(opts) {
  opts.angular = {
    module: 'styleguide'
  };

  opts.wiredep.exclude = [
    'modernizr',
    'respond',
    'html5shiv',
    'es5-shim',
    'js/bootstrap.js',
    'd3',
    'c3',
    'fe-app-dynamics',
    /angulartics-(?!gtm)/
  ];

  options = opts;

  return opts;
});


var gulp = require('gulp');

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
