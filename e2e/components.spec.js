'use strict';

describe('The component view', function () {

  var page;

  beforeEach(function () {
    // browser.get('index.html');
    browser.get(fe.env.appBaseUrl + '#/components/colors');
    page = require('./components.po');
  });

  it('should have correct title', function() {
    expect(page.title.getText()).toBe('Colors');
  });

});
