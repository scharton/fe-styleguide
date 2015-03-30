'use strict';

var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();
var wiredep = require('wiredep');


gulp.task('test', function() {
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['fe-bootstrap', 'fe-test-tool'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
    'src/{app,components}/**/*.js'
  ]);

  return gulp.src(testFiles)
    .pipe(plugins.karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});
