'use strict';

module.exports = function(config) {

  config.set({
    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-htmlfile-reporter'
    ],
    autoWatch : false,
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],
    reporters: ['progress', 'junit', 'coverage','html'],
    preprocessors:    {
      'src/app/**/{*.js,!(*.spec.js)}':   ['coverage']
    },
    junitReporter: {
      outputFile: 'reports/unit/junit.xml'
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
        }
      ]
    },
    htmlReporter: {
      outputFile: 'reports/unit/report.html'
    }
  });
};
