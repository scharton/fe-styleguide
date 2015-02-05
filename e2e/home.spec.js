'use strict';

describe('The home view', function () {

  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./home.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.title.getText()).toBe('FE New Tech Stack');
  });

  it('list more than 5 awesome things', function () {
    expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  });
});
