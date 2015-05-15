(function() {
  'use strict';

  angular
    .module('styleguide')

    // Register pattern IDs and names here
    .value('patterns', [
      {
        id: 'pattern1', name: 'Pattern 1'
      },
      {
        id: 'pattern2', name: 'Pattern 2'
      }
    ]);

})();
