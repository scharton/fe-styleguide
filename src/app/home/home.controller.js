'use strict';

angular.module('styleguide')
  .controller('HomeCtrl', HomeCtrl);


function HomeCtrl($scope) {
  $scope.awesomeThings = [
    {
      'title': 'AngularJS',
      'url': 'https://angularjs.org/',
      'description': 'HTML enhanced for web apps!',
      'logo': 'angular.png'
    },
    {
      'title': 'GulpJS',
      'url': 'http://gulpjs.com/',
      'description': 'The streaming build system.',
      'logo': 'gulp.png'
    },
    {
      'title': 'jQuery',
      'url': 'http://jquery.com/',
      'description': 'jQuery is a fast, small, and feature-rich JavaScript library.',
      'logo': 'jquery.jpg'
    },
    {
      'title': 'Bootstrap',
      'url': 'http://getbootstrap.com/',
      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
      'logo': 'bootstrap.png'
    },
    {
      'title': 'Angular UI Bootstrap',
      'url': 'http://angular-ui.github.io/bootstrap/',
      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
      'logo': 'ui-bootstrap.png'
    },
    {
      'title': 'Sass (Node)',
      'url': 'https://github.com/sass/node-sass',
      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
      'logo': 'node-sass.png'
    },
    {
      'title': 'Bower',
      'url': 'http://bower.io/',
      'description': 'A package manager for the web',
      'logo': 'bower-logo.png'
    },
    {
      'title': 'Yeoman',
      'url': 'http://yeoman.io/',
      'description': 'Scaffolding tool for modern webapps',
      'logo': 'yeoman.png'
    }
  ];

  angular.forEach($scope.awesomeThings, function(awesomeThing) {
    awesomeThing.rank = Math.random();
  });
}


// Hack fix for the Bootstrap Carousel conflict with Angular JS
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
  .controller('CarouselController', function() {})
  .directive('carousel', function() {
      return {};
  });
