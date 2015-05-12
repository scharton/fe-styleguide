(function() {
  'use strict';

  angular
    .module('styleguide')
    .value('growthRanks', [
      {
        name: 'Low',
        shortDesc: 'Too conservative',
        longDesc: 'Your savings would be very safe in case of a market downturn, but you would miss out on growth when markets are good.'
      },
      {
        name: 'Moderately Low',
        shortDesc: 'Limited growth',
        longDesc: 'Your savings would be well protected in case of a market downturn, but would have limited growth during market upswings.'
      },
      {
        name: 'Moderate',
        shortDesc: 'A cautious balance',
        longDesc: 'Your savings would be well protected in case of a market downturn, but would only have fair growth when market conditions are good.'
      },
      {
        name: 'Moderately High',
        shortDesc: 'A good balance!',
        longDesc: 'Your savings would be mostly protected in case of a market downturn, while still invested for growth during good markets.'
      },
      {
        name: 'High',
        shortDesc: 'Rather risky',
        longDesc: 'Your savings would be somewhat protected in case of a market downturn, but would grow well when market conditions are good.'
      }
    ]);

})();
