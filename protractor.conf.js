// An example configuration file.

var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

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
   },

   baseUrl: 'http://fe-styleguide.s3-website-us-west-1.amazonaws.com'
};
