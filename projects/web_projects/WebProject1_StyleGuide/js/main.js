$(document).ready(function() {
    // scroll
    var st = $("#top");
    var fixStart = st.offset().top;
    var fixEnd = st.next().offset().top;
    console.log("fixStart : " + fixStart);
    console.log("fixEnd : " + fixEnd);

    var winHeight = $(window).height();
    console.log("윈도우 높이 값 : " + winHeight);
    
    // $(window).on("scroll", function() {
    //     var scr = $(this).scrollTop();
    //     console.log("현재 스크롤 위치 : " + scr);

    //     if (scr == fixEnd) {
    //         $("#top").animate(2000, "easeInOutQuint");
    //     }

        
    // });

    $("#top").on("mousewheel",function(e,d) {
    //'easeInOutQuint'
        if(d > 0) {
            var prv = $(this).prev().offset().top;
            console.log(prv);
            $("html, body").stop().animate({
                "scrollTop" : prv
            },1400,"easeInOutQuint");
        } else if(d < 0) {
            var nxt = $(this).next().offset().top;
            $("html,body").stop().animate({
                "scrollTop" : nxt
            },1400,"easeInOutQuint");    
        }
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
});