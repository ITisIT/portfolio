$(document).ready(function () {
    // depth2
    $(".depth2").hide();

    $(".gnb > li").on("mouseenter", function() {
        $(this).children(".depth2").stop().fadeIn();
    });

    $(".gnb > li").on("mouseleave", function() {
        $(this).children(".depth2").stop().fadeOut();
    });

    // wrapMgnb
    $(".wrapMgnb").hide();

    $(".mmenu").on("click", function() {
        $(".wrapMgnb").stop().fadeIn();
    });

    $(".close").on("click", function() {
        $(".wrapMgnb").stop().fadeOut();
    });
    
    // mgnb
    $(".mdepth2").hide();

    $(".mgnb > li").on("click", function() {
        $(this).children(".mdepth2").stop().slideDown();
        $(this).siblings().children(".mdepth2").stop().slideUp();
    });

    // mainVisual
    $(".mv").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        fade: true
    });
});