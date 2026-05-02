$(document).ready(function() {
    // banner
    $(".ban").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    //ad
    $(".as").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false
    });

    // poster
    $(".pos").slick ({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    // scroll trigger
    // $(window).scroll(function () {
    //     $(".ani_stop").each(function (i) {
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
    //         if (bottom_of_window > bottom_of_object) {
    //             $(this).removeClass("ani_stop");
    //         }
    //         if (bottom_of_window < bottom_of_object) {
    //             $(this).addClass("ani_stop");
    //         }
    //     });
    // });
});