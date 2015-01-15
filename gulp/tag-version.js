'use strict';

var gulp = require('gulp');

var bump = require('gulp-bump');
var git = require('gulp-git');
var filter = require('gulp-filter');
var tagVersion = require('gulp-tag-version');


/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */
function inc(importance) {
	// Get all the files to bump version in
	return gulp.src(['./bower.json', './package.json'])
		// Bump the version number in those files
		.pipe(bump({ type: importance }))
		// Save it back to filesystem
		.pipe(gulp.dest('./'))
		// Commit the changed version number
		.pipe(git.commit('bumps package version'))
		// Read only one file to get the version number
		.pipe(filter('package.json'))
		// Tag it in the repository
		.pipe(tagVersion());
}

gulp.task('patch', function() { return inc('patch'); });
gulp.task('feature', function() { return inc('minor'); });
gulp.task('release', function() { return inc('major'); });
