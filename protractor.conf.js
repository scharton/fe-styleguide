var chalk = require('chalk');
var HtmlReporter = require('protractor-html-screenshot-reporter');
var resolveEnv = require('./bower_components/fe-env/dist/scripts/server/resolve');


// this will be used for local tests
var multiCapabilities = [{
  'browserName': 'chrome'
}];


// if sauce env vars are set, tests will run on sauce labs
if (process.env.SAUCE_USERNAME) {

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
  framework: 'jasmine2',

  //If these environment variables exist, the test will run on sauce labs
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: multiCapabilities,

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['e2e/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `e2eresults`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports/e2e'
    }));

    // Convenient function to enable/disable test for non-angular pages
    // TODO: if we have more convenient functions, extract them to a single component
    browser.isAngularSite = function(flag) {
      browser.ignoreSynchronization = !flag;
    };

    // Expose resolved fe.env to global
    global.fe = {
      env: resolveEnv(browser.params.env)
    };

    // Override the application base URL
    fe.env.appBaseUrl = 'http://styleguide.fngn.com.s3-website-us-west-1.amazonaws.com/';

    for (var prop in fe.env) {
      console.log('[' + chalk.cyan('fe.env.' + prop) + ']', fe.env[prop]);
    }
  }
};
