$(document).ready(function(){
  $(".menu-button").click(function(event){
    event.preventDefault();
    $(".sidenav").toggleClass("menushow");
    $(".menu-button").toggleClass("active");     
  });
});

$("[data-fancybox]").fancybox({
  slideShow : false,
  loop : true,
  infobar : true,
  protect : true,

  caption : function( instance, item ) {
    return $(this).find('.image__info').html();
  }
});