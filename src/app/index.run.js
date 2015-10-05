(function() {
  'use strict';

  angular
    .module('ttnails')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
