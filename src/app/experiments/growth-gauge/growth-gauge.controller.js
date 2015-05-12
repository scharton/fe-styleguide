(function() {
  'use strict';

  angular
    .module('styleguide')
    .controller('GrowthGaugeCtrl', GrowthGaugeCtrl);


  function GrowthGaugeCtrl($scope, $log, growthRanks) {

    $log.log('GrowthGaugeCtrl');


    $scope.svgSupport = Modernizr.svg;


    //
    // Slider
    //

    var sliderOpts = {
      min: 0,
      max: 1000000,
      step: 5000,
      precision: 0
    };

    var sliderRange = sliderOpts.max - sliderOpts.min;

    $scope.slider = {
      options: sliderOpts,
      value: sliderRange * 0.8
    };


    //
    // Growth ranks
    //

    // Four threshold to break potential growth into five ranks
    var rankThreshold = [ 0.075, 0.15, 0.25, 0.35 ];

    var resolveGrowthRank = function(gaugeValue) {
      var ratio = gaugeValue / sliderRange;
      var index = 0;
      for (var i = 0, ii = rankThreshold.length; i < ii; i++) {
        if (ratio > rankThreshold[i]) {
          index = i + 1;
        }
      }

      return growthRanks[index];
    };

    $scope.growthRank = resolveGrowthRank(sliderOpts.max - $scope.slider.value);

    $scope.$watch('slider.value', function(newValue, oldValue) {
      if (newValue !== oldValue) {
        $scope.growthRank = resolveGrowthRank(sliderOpts.max - newValue);
      }
    });


    //
    // Gauge
    //

    if ($scope.svgSupport) {

      $scope.gauge = {
        data: {
          columns: [
            // Gauge value is the reverse of the slider value
            // Lower slider value = higher gauge value
            [ 'data', sliderOpts.max - $scope.slider.value ]
          ],
          type: 'gauge'
        },
        gauge: {
          label: {
            format: function() { return ''; },
            show: false // to turn off the min/max labels.
          },
          min: sliderOpts.min,
          max: sliderOpts.max,
          width: 80
        },
        tooltip: {
          show: false
        },
        color: {
          // Five color levels
          pattern: [ '#30b5c9', '#60B044', '#99c928', '#F6C600', '#F97600'  ],
          threshold: {
            values: [
              sliderOpts.min + sliderRange * rankThreshold[0],
              sliderOpts.min + sliderRange * rankThreshold[1],
              sliderOpts.min + sliderRange * rankThreshold[2],
              sliderOpts.min + sliderRange * rankThreshold[3]
            ]
          }
        },
        size: {
          height: 120
        },
        oninit: function(chart) {
          $scope.$watch('slider.value', function(newValue, oldValue) {
            if (newValue !== oldValue) {
              chart.load({
                columns: [[ 'data', sliderOpts.max - newValue ]]
              });
            }
          });
        }
      }; // /$scope.gauge

    }

  } // /GrowthGaugeCtrl

})();
