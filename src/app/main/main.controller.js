(function () {
  'use strict';

  angular
    .module('ttnails')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.myInterval = 0;
    vm.noWrapSlides = false;
    vm.slides = {
      main: true,
      nails: false,
      makeup: false
    };
  }
})();
