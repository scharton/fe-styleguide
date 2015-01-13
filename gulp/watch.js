'use strict';

var gulp = require('gulp');

gulp.task('watch', ['wiredep', 'injector:css', 'injector:js'] ,function () {

	//
	// Start accordant Gulp tasks whenever changes occur to files with matched patterns.
	//

	gulp.watch('src/**/*.scss', ['injector:css']);
	gulp.watch('src/**/*.js', ['injector:js']);
	gulp.watch('src/assets/images/**/*', ['images']);
	gulp.watch('bower.json', ['wiredep']);
});
