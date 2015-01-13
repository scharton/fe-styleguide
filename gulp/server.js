'use strict';

var gulp = require('gulp');

var util = require('util');
var browserSync = require('browser-sync');
var proxy = require('./proxy');


function browserSyncInit(baseDir, files, browser) {

	//
	// Synchronize browser when the serving files change.
	//

	browser = browser || 'default';

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
			middleware: proxy,
			routes: routes
		},
		browser: browser
	});
}


gulp.task('serve', ['watch'], function () {

	//
	// Serve files from the src and .tmp dirs.
	//

	browserSyncInit([
		'src',
		'.tmp'
	], [
		'.tmp/**/*.css',
		'src/assets/images/**/*',
		// 'src/*.html',
		'src/**/*.html',
		'src/**/*.js'
	]);
});


gulp.task('serve:dist', ['build'], function () {

	//
	// Server files from the dist dir.
	//

	browserSyncInit('dist');
});


gulp.task('serve:e2e', ['wiredep', 'injector:js', 'injector:css'], function () {
	browserSyncInit(['src', '.tmp'], null, []);
});


gulp.task('serve:e2e-dist', ['build'], function () {
	browserSyncInit('dist', null, []);
});
