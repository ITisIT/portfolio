$(document).ready(function () {
    $(".depth2").hide();

    $(".gnb > li").on("mouseenter", function() {
        $(this).children(".depth2").stop().slideDown();
    });

    $(".gnb > li").on("mouseleave", function() {
        $(this).children(".depth2").stop().slideUp();
    });

    $(".banner").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
});
