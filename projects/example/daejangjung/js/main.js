$(document).ready(function () {
    // depth2, depth2Bg
    $(".depth2, .depth2Bg").hide();

    $(".gnb > li").on("mouseenter", function() {
        $(".depth2, .depth2Bg").stop().slideDown(400);
    });

    $(".gnb > li").on("mouseleave", function() {
        $(".depth2, .depth2Bg").stop().slideUp(400);
    });

    // newsList
    $(".newsList").slick ({
        autoplay : true,
        autoplaySpeed: 3000,
        vertical: true,
        dots: false,
        arrows : false
    });

    //sns
    $(".snsList").slick({
        autoplay : true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScoll: 1,
        adaptiveHeight: true
    });
});
