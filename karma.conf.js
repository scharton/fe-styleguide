'use strict';

module.exports = function(config) {

  config.set({
    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
	  'karma-coverage',
	  'karma-junit-reporter'
    ],
    autoWatch : false,
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],
	reporters: ['progress', 'junit', 'coverage'],
	preprocessors:    {
		'src/app/**/{*.js,!(*.spec.js)}':   ['coverage']
	},
	junitReporter: {
		outputFile: 'reports/junit/TESTS-xunit.xml'
	},
	coverageReporter: {
		type:   'lcov',
		dir:    'reports',
		subdir: 'coverage'
	}
  });
};
