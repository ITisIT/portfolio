$(document).ready(function() {
    var winHeight = $(window).height();
    var i = 0;
    var scr = $(window).scrollTop();
    // 마우스 휠을 올렸을 때 이전 섹션으로
    // 마우스 휠을 내렸을 때 다음 섹션으로

    var scr2 = $(this).scrollTop();

    
    $(window).on("resize", function() {
        winHeight = $(window).height();
        scr = $(window).scrollTop();

        for (i = 0; i < $("section").length; i++) {
            if (scr >= winHeight * i && scr < winHeight * (i+1)) {
                $(".gnb li").eq(i).addClass("on").siblings().removeClass("on");
            }
        }
    });

    $(window).on("scroll", function() {
        scr = $(this).scrollTop();
        // console.log("현재 : " + scr);
        

        for (i = 0; i < $("section").length; i++) {
            if (scr >= winHeight * i && scr < winHeight * (i+1)) {
                $(".gnb li").eq(i).addClass("on").siblings().removeClass("on");
            }
        }

        // scr2 = scr;
        // console.log("과거 : " + scr);
        // var isAnimate = $("html, body").is(":animated");
        // console.log(isAnimate);

        // if (scr - scr2 > 0 && isAnimate == false) {
        //     console.log("down");
        //     $("html, body").stop().animate({ // 자바스크립트 animate()의 단점 : 스크롤 끝까지 계속 실행됨
        //         "scrollTop" : winHeight + scr
        //     }); 
        // } else if(scr - scr2 < 0 && isAnimate == false) {
        //     console.log("up");
        // }
        // scr2 = scr;
    });

    $(".gnb li").on("click", function() {
        var j = $(this).index();
        console.log(j);
        $("html, body").stop().animate({
            "scrollTop" : winHeight * j
        })
    });

    $("section").on("mousewheel", function (e, d) {
        //var scr = $(this).height();
        var i = $(this).index();
        console.log(d);

            if (d > 0) { // d가 1일 때
                $("html, body").stop().animate({
                    //"scrollTop" : scr - winHeight
                    "scrollTop" : winHeight * (i-1)
                })
            } else if (d < 0) { // d가 -1일 때
                $("html, body").stop().animate({
                    //"scrollTop" : scr + winHeight
                    "scrollTop" : winHeight * (i+1)
                })
            }
    });


    $(window).on("keydown", function(e) {
        var k = $(this).scrollTop();
        scr = $(window).scrollTop();
        console.log(e.key);

        if(e.key === "ArrowUp") {
            for (i = 0; i < $("section").length; i++) {
                if (scr >= winHeight * i && scr < winHeight * (i+1)) {
                    $("html, body").stop().animate({
                        "scrollTop" : $("section").eq(i-1).offset().top
                    })
                }
            }
        } else if(e.key === "ArrowDown") {
            for (i = 0; i < $("section").length; i++) {
                if (scr >= winHeight * i && scr < winHeight * (i+1)) {
                    $("html, body").stop().animate({
                        "scrollTop" : $("section").eq(i+1).offset().top
                    });
                }
            }
        }
    });

    
});