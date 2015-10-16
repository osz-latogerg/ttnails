(function () {
  'use strict';

  angular
    .module('ttnails')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $templateCache, $window) {
    $templateCache.put('lightbox.html',
      "<div class=modal-body ng-swipe-left=Lightbox.nextImage() ng-swipe-right=Lightbox.prevImage()><div class=lightbox-nav><button class=close aria-hidden=true ng-click=$dismiss()>x</button><div class=btn-group><a class=\"btn btn-xs btn-default\" ng-click=Lightbox.prevImage()>‹ Előző</a> <a class=\"btn btn-xs btn-default\" ng-click=Lightbox.nextImage()>Következő ›</a></div></div><div class=lightbox-image-container><div class=lightbox-image-caption><span>{{Lightbox.imageCaption}}</span></div><img ng-if=!Lightbox.isVideo(Lightbox.image) lightbox-src={{Lightbox.imageUrl}}> <div ng-if=Lightbox.isVideo(Lightbox.image) class=\"embed-responsive embed-responsive-16by9\"><video ng-if=!Lightbox.isSharedVideo(Lightbox.image) lightbox-src={{Lightbox.imageUrl}} controls autoplay></video><embed-video ng-if=Lightbox.isSharedVideo(Lightbox.image) lightbox-src={{Lightbox.imageUrl}} ng-href={{Lightbox.imageUrl}} iframe-id=lightbox-video class=embed-responsive-item><a ng-href={{Lightbox.imageUrl}}>Watch video</a></embed-video></div></div></div>"
    );
    $window.fbAsyncInit = function () {
      // Executed when the SDK is loaded
      FB.init({
        appId: '812782195502403',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.3'
      });
    };

    (function (d) {
      // load the Facebook javascript SDK
      var js,
        id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = "//connect.facebook.net/en_US/sdk.js";

      ref.parentNode.insertBefore(js, ref);

    }(document));
    $log.debug('runBlock end');
  }

})();
