$(document).ready(function () {
	// goTop
    $(".goTop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".goTop").fadeIn();
        } else {
            $(".goTop").fadeOut();
        }
    });

    console.log(Number(false)); // false = 0
    
    $(".goTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    // header
    // var winHeight = $(window).height();
    // var osHeight = $("#overseas").height();
    // var osTop = $("#overseas").offset().top;

    // console.log("overseas 높이 : " + osHeight);
    // console.log("overseas : " + osTop);

    // $(window).on("mousewheel", function (event, delta) {
    //     if (delta < (winHeight - osTop)) {
    //         // $("#header").addClass("headerNone");
    //         $("#header").css({
    //             "position" : "initial",
    //             "display" : "none"
    //         });
    //     } else {
    //         // $("#header").removeClass("headerNone");
    //         $("#header").css({
    //             "position" : "fixed",
    //             "display" : "block"
    //         });
    //     }
    // });

	// wrapMgnb
	$(".wrapMgnb").hide();

    $(".mmenu").on("click", function() {
        $(".wrapMgnb").stop().fadeIn();
    });

    $(".close").on("click", function() {
        $(".wrapMgnb").stop().fadeOut();
    });

});