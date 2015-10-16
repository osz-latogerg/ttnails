(function() {
  'use strict';

  angular
    .module('ttnails')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr, LightboxProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    LightboxProvider.fullScreenMode = true;

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

})();
