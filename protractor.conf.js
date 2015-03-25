var chalk = require('chalk');
var HtmlReporter = require('protractor-html-screenshot-reporter');
var resolveEnv = require('./bower_components/fe-env/dist/scripts/server/resolve');


// this will be used for local tests
var multiCapabilities = [{
  'browserName': 'chrome'
}];


// if sauce env vars are set, tests will run on sauce labs
if (process.env.SAUCE_USERNAME) {

  console.log('Using Sauce Labs with with user: ' + process.env.SAUCE_USERNAME);

  multiCapabilities = [{
    'browserName': 'chrome',
    "platform": "Windows 7",
    'tunnel-identifier': process.env.SAUCE_TUNNEL_NAME,
    'build': process.env.SOURCE_BUILD_NUMBER,
    'name': 'Homepage tests'
//  }, {
  //TODO this one has a problem, need to figure it out
  //   'browserName': 'firefox',
  //   'tunnel-identifier': 'homepageTunnel',
  //   'build': process.env.SOURCE_BUILD_NUMBER,
  //   'name': 'Homepage tests'
  // }, {
    // 'browserName': 'internet explorer',
    // 'tunnel-identifier': 'homepageTunnel',
    // 'build': process.env.SOURCE_BUILD_NUMBER,
    // 'name': 'Homepage tests'
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

    for (var prop in fe.env) {
      console.log('[' + chalk.cyan('fe.env.' + prop) + ']', fe.env[prop]);
    }
  }
};
