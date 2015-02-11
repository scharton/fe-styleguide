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
      outputFile: 'reports/unit/xunit.xml'
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
    }
  });
};
