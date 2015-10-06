(function() {
  'use strict';

  angular
    .module('ttnails')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.myInterval = 0;
    vm.noWrapSlides = false;
    vm.slides = [{
      template: 'app/components/home/home.html',
      cssClass: 'slide-main'
    }, {
      template: 'app/components/nails/nails.html',
      cssClass: 'slide-nails'
    }, {
      template: 'app/components/makeup/makeup.html',
      cssClass: 'slide-makeup'
    }, {
      template: 'app/components/prices/prices.html',
      cssClass: 'slide-prices'
    }, {
      template: 'app/components/contact/contact.html',
      cssClass: 'slide-contact'
    }];

    function goToSlide(index) {
        for (var i = 0; i < vm.slides.length; i++) {
            var slide = vm.slides[i];
            if (index === i) {
                slide.active = true;
            } else {
                slide.active = false;
            }
        }
    }

    vm.goToSlide = goToSlide;
  }
})();
