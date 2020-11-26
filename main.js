var hamburger = $('.header-right > a '); 
var cross = $('.hamburger-menu > a')
var menuSmall = $('.hamburger-menu');


hamburger.click(function(){
    menuSmall.fadeIn();
});
cross.click(function(){
    menuSmall.fadeOut();
});




