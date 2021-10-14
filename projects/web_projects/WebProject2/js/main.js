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

	// wrapMgnb
	$(".wrapMgnb").hide();

    $(".mmenu").on("click", function() {
        $(".wrapMgnb").stop().fadeIn();
    });

    $(".close").on("click", function() {
        $(".wrapMgnb").stop().fadeOut();
    });

});