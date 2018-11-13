$(document).ready(function(){
  $(".menu-button").click(function(event){
    event.preventDefault();
    $(".sidenav").toggleClass("menushow");
    $(".menu-button").toggleClass("active");     
  });
});