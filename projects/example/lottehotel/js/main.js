$(document).ready(function() {
    // wrapMgnb
    $(".wrapMgnb").hide();

    $(".ham").on("click", function() {
        $(".wrapMgnb").fadeIn();
    });

    $(".wrapMgnb .close").on("click", function() {
        $(".wrapMgnb").fadeOut();
    });

    // mainVisual
    $(".mv").slick({
        autoplay: true,
        dots: true
    });

    // brand
    $(".brandList").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        fade: true
    });

    // magazine
    $(".magazineList").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1400,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});