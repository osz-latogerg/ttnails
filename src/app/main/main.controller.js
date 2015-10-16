/**
TODO:
 - get carousel data from WP API
 - create service for the API calls
 - separate to standalone controllers if this one gets significantly bigger
*/
(function () {
  'use strict';

  angular
    .module('ttnails')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, Lightbox) {
    var vm = this;

    vm.myInterval = 0;
    vm.noWrapSlides = false;
    vm.slides = [{
      template: 'app/components/home/home.html',
      cssClass: 'slide-main'
    }, {
      template: 'app/components/about/about.html',
      cssClass: 'slide-about'
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
    }, {
      template: 'app/components/blog/blog.html',
      cssClass: 'slide-blog'
    }];


    vm.prices = [{
          url: 'assets/images/prices.jpg',
    }];
    vm.nails = [];
    vm.makeups = [];

    for (var i = 0; i <= 15; i++) {
        vm.nails.push({
              url: 'assets/images/korom/' + (i+1) + '.jpg',
              thumburl: 'assets/images/korom/thumbs/' + (i+1) + 'i.jpg'
        });
    }

    for (var j = 0; j <= 38; j++) {
        vm.makeups.push({
              url: 'assets/images/smink/' + j + '.jpg',
              thumburl: 'assets/images/smink/thumbs/' + j + 'i.jpg'
        });
    }

    function openLightboxModal(data, index) {
      Lightbox.openModal(vm[data], index);
    }

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

    //export functions
    vm.goToSlide = goToSlide;
    vm.openLightboxModal = openLightboxModal;
  }
})();
