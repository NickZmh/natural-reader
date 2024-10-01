// TOGGLE HAMBURGER & COLLAPSE NAV
$('.nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$('.menu-left a').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
}).append("<span>");

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        items: 2,
        nav: true,
        dots: false,
        margin: 25,
        navText: ["",""],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            1120: {
                items: 2,
                nav: true
            }
        }
    });
});