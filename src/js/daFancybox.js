$("[data-fancybox]").fancybox({
  slideShow : false,
  loop : true,
  infobar : true,
  protect : true,

  caption : function( instance, item ) {
    return $(this).find('.image__info').html();
  }
});