// An example configuration file.

var HtmlReporter = require('protractor-html-screenshot-reporter');

var baseUrl = 'http://127.0.0.1:3000';

var multiCapabilities = [{
  'browserName': 'chrome'
}];

// if sauce env vars are set, tests will run on sauce labs
if (process.env.SAUCE_USERNAME) {
  baseUrl = 'http://fe-styleguide.s3-website-us-west-1.amazonaws.com';

  multiCapabilities = [{
    'browserName': 'chrome',
    'build': process.env.BUILD_NUMBER,
    'name': 'Fe-Styleguide tests',
    'version': '34',
    'selenium-version': '2.42.2',
    'platform': 'OS X 10.9'
  }, {
    'browserName': 'chrome',
    'build': process.env.BUILD_NUMBER,
    'name': 'Fe-Styleguide tests',
    'version': '35',
    'selenium-version': '2.42.2',
    'platform': 'OS X 10.9'
  }, {
    'browserName': 'firefox',
    'build': process.env.BUILD_NUMBER,
    'name': 'Fe-Styleguide tests',
    'version': '29',
    'selenium-version': '2.42.2'
  }, {
    'browserName': 'firefox',
    'build': process.env.BUILD_NUMBER,
    'name': 'Fe-Styleguide tests',
    'version': '30',
    'selenium-version': '2.42.2'
  }, {
    'browserName': 'internet explorer',
    'build': process.env.BUILD_NUMBER,
    'name': 'Fe-Styleguide tests',
    'version': '11',
    'selenium-version': '2.42.2',
    'platform': 'Windows 7'
  }, {
    'browserName': 'internet explorer',
    'build': process.env.BUILD_NUMBER,
    'name': 'Fe-Styleguide tests',
    'version': '10',
    'selenium-version': '2.42.2',
    'platform': 'Windows 7'
  }];
}



exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['e2e/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    showTiming: true
  },

  onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `e2eresults`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'reports/e2e'
      }));
   },

  baseUrl: baseUrl,

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: multiCapabilities
};
