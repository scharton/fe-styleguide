'use strict';

var gulp = require('gulp');

gulp.task('wiredep', function () {
	var wiredep = require('wiredep').stream;

	//
	// Wire bower components to index.html.
	//
	// Modernizer and fe-bootstrap are included manually in index.html, so we
	// exclude it from auto-wiring.
	//
	// Also, angular-bootstrap already carries the bootstrap JS, so we don't need to
	// include Bootstrap scripts.
	//

	return gulp.src('src/index.html')
		.pipe(wiredep({
			directory: 'bower_components',
			exclude: [/modernizr/, /fe-bootstrap/]
		}))
		.pipe(gulp.dest('src'));
});
