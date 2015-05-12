(function() {
  'use strict';

  angular
    .module('styleguide')
    .directive('feChart', feChart);


  function feChart($timeout) {
    return {
      restrict: 'A',

      scope: {
        options: '='
      },

      link: function(scope, elem) {

        scope.options.bindto = elem[0];

        scope.$watch('options', function() {

          // Bind this to chart instance for oninit callback
          var oninit = scope.options.oninit;
          if (oninit) {
            scope.options.oninit = function() {
              $timeout(function() {
                oninit.apply(scope.chart, [ scope.chart ]);
              });
            };
          }

          // Bind this to chart instance for onrenderd callback
          var onrendered = scope.options.onrendered;
          if (onrendered) {
            scope.options.onrendered = function() {
              $timeout(function() {
                onrendered.apply(scope.chart, [ scope.chart ]);
              });
            };
          }

          // Generate chart
          scope.chart = c3.generate(scope.options);
        });


        // Destroy chart when scope is destroyed
        scope.$on('$destroy', function() {
          if (scope.chart) {
            scope.chart.destroy();
          }
          elem.remove();
        });

      } // /link
    };
  } // /feChart

})();
