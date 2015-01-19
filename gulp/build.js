'use strict';

var gulp = require('gulp');

// Load gulp plugins
var plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});


gulp.task('jshint', function () {
	return gulp.src('src/{app,components}/**/*.js')
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'));
});


gulp.task('styles', ['injector:sass'], function () {

	//
	// Compile applicatin and vendor SASS to CSS. Put the generated CSS files to .tmp/.
	//

	return gulp.src(['src/app/index.scss'])
		.pipe(plugins.sass({style: 'expanded'}))
		.on('error', function handleError(err) {
			console.error(err.toString());
			this.emit('end');
		})
		.pipe(plugins.autoprefixer('last 1 version'))
		.pipe(gulp.dest('.tmp/app/'));
});


gulp.task('injector:sass', function () {

	//
	// Insert "@import" directives in index.scss to reference all application-level SASS files.
	// SASS compiler will later pull in referred SASS files while compiling index.scss to
	// index.css.
	//

	var source = gulp.src([
			'src/{app,components}/**/*.scss',
			'!src/app/index.scss'
		], {read: false});

	// Fix 'src/app/' and 'src/components/' @import paths
	var transform = function(filePath) {
			filePath = filePath.replace('src/app/', '');
			filePath = filePath.replace('src/components/', '../components/');
			return '@import \'' + filePath + '\';';
		};

	return gulp.src('src/app/index.scss')
		.pipe(plugins.inject(source, {
			transform: transform,
			starttag: '// injector',
			endtag: '// endinjector',
			addRootSlash: false
		}))
		.pipe(gulp.dest('src/app/'));
});


gulp.task('injector:js', ['jshint'], function () {

	//
	// Inject application-level JS files into index.html.
	//

	var source = gulp.src([
			'src/{app,components}/**/*.js',
			'!src/{app,components}/**/*.spec.js',
			'!src/{app,components}/**/*.mock.js'
		]);

	return gulp.src('src/index.html')
		.pipe(plugins.inject(source.pipe(plugins.angularFilesort()), {
			ignorePath: 'src',
			addRootSlash: false
		}))
		.pipe(gulp.dest('src/'));
});


gulp.task('partials', function () {

	//
	// Concatenate and register AngularJS templates in $templateCache.
	//

	return gulp.src('src/{app,components}/**/*.html')
		.pipe(plugins.minifyHtml({
			empty: true,
			spare: true,
			quotes: true
		}))
		.pipe(plugins.angularTemplatecache('templateCacheHtml.js', {
			module: 'styleguide'
		}))
		.pipe(gulp.dest('.tmp/templates/'));
});


gulp.task('html', ['wiredep', 'styles', 'injector:js', 'partials'], function () {
	// var htmlFilter = plugins.filter('*.html');
	var jsFilter = plugins.filter('**/*.js');
	var cssFilter = plugins.filter('**/*.css');
	var assets;

	return gulp.src('src/*.html')

		// Inject concatenated and registered AngularJS templates to HTMLs
		.pipe(plugins.inject(gulp.src('.tmp/templates/templateCacheHtml.js', {read: false}), {
			starttag: '<!-- inject:partials -->',
			ignorePath: '.tmp',
			addRootSlash: false
		}))

		// Parse the build blocks in HTMLs. Replace build blocks with concatenated files.
		.pipe(assets = plugins.useref.assets())

		// Revision the concatenated files
		.pipe(plugins.rev())

		// Add AngularJS dependency injection annotations, and minify JS files
		.pipe(jsFilter)
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.uglify({preserveComments: plugins.uglifySaveLicense}))
		.pipe(jsFilter.restore())

		// Optimize and minify CSS files
		.pipe(cssFilter)
		//.pipe(plugins.replace('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', 'fonts'))
		.pipe(plugins.csso())
		.pipe(cssFilter.restore())

		.pipe(assets.restore())
		.pipe(plugins.useref())

		// Replace static asset references with the revisioned ones
		.pipe(plugins.revReplace())

		// // Minify HTML files
		// .pipe(htmlFilter)
		// .pipe(plugins.minifyHtml({
		// 	empty: true,
		// 	spare: true,
		// 	quotes: true,
		// 	conditionals: true
		// }))
		// .pipe(htmlFilter.restore())

		// Output to dist dir
		.pipe(gulp.dest('dist/'))
		.pipe(plugins.size({ title: 'dist/', showFiles: true }));
});


gulp.task('images', function () {
	return gulp.src('src/assets/images/**/*')
		.pipe(plugins.imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('dist/assets/images/'));
});


gulp.task('fonts', function () {
	return gulp.src('bower_components/fe-bootstrap/dist/assets/fonts/**/*.{eot,svg,ttf,woff}')
		.pipe(gulp.dest('dist/assets/fonts/'));
});


gulp.task('misc', function () {
	return gulp.src('src/**/*.ico')
		.pipe(gulp.dest('dist/'));
});


gulp.task('clean', function (done) {
	plugins.del(['dist/', '.tmp/'], done);
});


gulp.task('build', ['html', 'images', 'fonts', 'misc']);
