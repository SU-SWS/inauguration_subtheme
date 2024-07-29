(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.inaugurationSubtheme = {
    attach: function (context, settings) {
     $('.ptype-stanford-banner img[src*="arch_banner"]', context).each(function() {
       // console.log(this);
       $(this).parent().parent().addClass('arch-banner-image');
       $(this).parent().detach();
     })
    },
  };

})(jQuery, Drupal, once);
