$(document).ready(function(){
  $(".menu-button").click(function(event){
    event.preventDefault();
    $(".sidenav").toggleClass("menushow");
    $(".menu-button").toggleClass("active");     
  });
});

$(document).ready(function(){

  $(".submenu-trigger").click(function() {
      $(".submenu", this).toggleClass("active");
  });
});