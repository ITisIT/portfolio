$(document).ready(function() {
    
    // gotop
    $(".gotop").hide();
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


    // gnb, depth2, depth2Bg
    $(".depth2Bg").hide();

    $(".gnb > li").mouseenter(function () {
        $(this).children(".depth2Bg").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).children(".depth2Bg").stop().fadeOut();
    });


    // mainBanner
    $(".mb").slick ({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    // middleBanner
    $(".pros").slick ({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false
    });

    // partner
    $(".ptContents").slick ({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false
    });

    // solServices
    var solSer = $("#solServices");
    console.log("solServices의 높이 값 : " + solSer.height());
    var fixStart = solSer.offset().top;
    var fixEnd = solSer.next().offset().top;
    console.log("fixStart : " + fixStart);
    console.log("fixEnd : " + fixEnd);

    var winHeight = $(window).height();
    console.log("윈도우 높이 값 : " + winHeight);
    var scr;
    

    $(window).on("scroll", function() {
        scr= $(this).scrollTop();
        // console.log("현재 스크롤 위치 : " + scr);
        console.log($(".track").position());
        
        if (scr >= fixStart && scr <= fixEnd - winHeight) {
            $(".track").css("left", -scr + fixStart);
            // console.log($(".track").position());
            $(".container").css({
                "position" : "fixed",
                "width" : "100%",
                "height" : "100%",
                "top" : 0,
                "left" : 0
            });
        } else if (scr > fixEnd - winHeight) {
            $(".container").css({
                "position" : "relative",
                // "left" : "-88%",
                "left" : "-100%",
                "transition" : "left 1s"
            });
            // $(".container").animate({
            //     "position" : "relative",
            //     "left" : 0
            // },2000, "easeOutBounce");

        } else if (scr < fixStart) {
            $(".container").css({
                "position" : "relative",
                "left" : 0
            });
            // $(".container").animate({
            //     "position" : "relative",
            //     "left" : -liLeng
            // }, 2000, "easeOutBounce");
        }
    });
});