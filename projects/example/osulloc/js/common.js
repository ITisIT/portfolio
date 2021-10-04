$(document).ready(function() {  // 문서 준비 이벤트 헤드에 선언할 때 필요
    // gotop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }
    });

    console.log(Number(false)); // false = 0
    
    $(".gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;   // 0을 반환
    });

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
    

    //sitemap
    $("#sitemap").hide();

    $(".allMenu").on("click" ,function() {
        $("#sitemap").fadeIn(300);
    });

    $(".sitemapClose").on("click", function() {
        $("#sitemap").fadeOut(300);
    });

    // popup
    $(".popupClose").on("click", function() {
        $(".popup").slideUp();
    });

    // gnb
    $(".depth2, .depth2Bg").hide();

    $(".gnb > li").on("mouseenter", function() {
        $(".depth2, .depth2Bg").stop().slideDown();
    });

    $(".gnb > li").on("mouseleave", function() {
        $(".depth2, .depth2Bg").stop().slideUp();
    });

    // mainBanner Slide
    $(".mb").slick ({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        fade: true
    });

    // insta
    $(".instaList").slick ({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
    });
});