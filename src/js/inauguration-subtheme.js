(function ($, Drupal) {
  'use strict';
  Drupal.behaviors.inaugurationSubtheme = {
    attach: function (context, settings) {
     $('.su-page-banner .ptype-stanford-banner img[src*="arch_banner"]', context).each(function() {
       $(this).closest('.su-hero__media').addClass('arch-banner-hero')
       $(this).parent().parent().addClass('arch-banner-image');
       $(this).parent().detach();
     })
    },
  };

})(jQuery, Drupal, once);
