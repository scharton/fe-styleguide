'use strict';

module.exports = function(config) {

  config.set({
    autoWatch: false,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-htmlfile-reporter'
    ],

    reporters: ['progress', 'junit', 'coverage', 'html'],

    preprocessors: {
      'src/app/**/{*.js,!(*.spec.js)}': ['coverage']
    },

    junitReporter: {
      outputFile: 'reports/unit/TESTS-xunit.xml'
    },

    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [
        {
          type: 'html',
          subdir: '.'
        },
        {
          type: 'cobertura',
          subdir: '.'
        },
        {
          type: 'lcov',
          subdir: '.'
        }
      ]
    },

    htmlReporter: {
      outputFile: 'reports/unit/report.html'
    }

  });
};
