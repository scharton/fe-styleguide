/**
* This file uses the Page Object pattern to define the main page for tests
* https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
*/

'use strict';

var HomePage = function() {

  this.carousel = element(by.id('carousel-example-generic'));
  
  this.pageHeader = element(by.css('.page-header'));

  this.title = this.pageHeader.element(by.css('h2'));

  this.thumbnailEls = element(by.css('body')).all(by.repeater('awesomeThing in awesomeThings'));
};

module.exports = new HomePage();
