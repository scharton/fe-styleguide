'use strict';

var gulp = require('gulp');

gulp.task('wiredep', function () {
	var wiredep = require('wiredep').stream;

	//
	// Wire bower components to index.html.
	//
	// Modernizer is included manually in index.html, so we exclude it from auto-wiring.
	//
	// We excluded Bootstrap SASS and CSS. SASS will be compiled to CSS using Gulp's SASS
	// plugin.
	//
	// Also, angular-bootstrap already carries the bootstrap JS, so we don't need to
	// include Bootstrap scripts.
	//

	return gulp.src('src/index.html')
		.pipe(wiredep({
			directory: 'bower_components',
			exclude: [/modernizr/, /bootstrap-sass-official/, /bootstrap\.css/]
		}))
		.pipe(gulp.dest('src'));
});
