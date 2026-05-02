$(document).ready(function() {
    var winHeight = $(window).height();
    console.log(winHeight);

    // scroll trigger
    $(window).scroll(function () {
        $(".ani_stop").each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass("ani_stop");
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass("ani_stop");
            }
        });
    });
    
    // mainVisual
    $(".mv").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
    
    // hamberger menu botton
    $(".ham").on("click", function () {
        $(".wrapMgnb").animate({
            "left" : "0"
        });
    });

    $(".mgnbClose").on("click", function () {
        $(".wrapMgnb").animate({
            "left" : "100%"
        });
    });

    // room
    $("#room ul li:nth-child(1)").addClass("active");

    $("#room ul li").mouseenter(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });



});