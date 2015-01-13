'use strict';

var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');


// Downloads the selenium webdriver
gulp.task('webdriver-update', plugins.protractor.webdriver_update);

gulp.task('webdriver-standalone', plugins.protractor.webdriver_standalone);


function runProtractor (done) {
	var testFiles = [
		'test/e2e/**/*.js'
	];

	gulp.src(testFiles)
		.pipe(plugins.protractor.protractor({
			configFile: 'protractor.conf.js',
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


gulp.task('protractor', ['protractor:src']);
gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
