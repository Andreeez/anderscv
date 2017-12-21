$(document).ready(function(){
 console.log( "ready!" );
//$("#container").hide();
$("#header").show();
$(".arrownDown").hide();
$(".arrownDown").fadeIn(7000);
$(".phoneNumber").hide();
  

$(".arrowdown").click(function(){
  // $("#header").hide();
   $("#container").show();
   
 });

$(".phoneLogo").click(function(){
    $(".phoneNumber").show();
});


$(function() {
  $('.intro').addClass('go');
  
 $('.reload').click(function() {
    $('.intro').removeClass('go').delay(200).queue(function(next) {
     $('.intro').addClass('go');
      next();
    });
  
   });
})


//  w3.includeHTML(); 

});




 