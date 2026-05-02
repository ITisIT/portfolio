$(document).ready(function() {
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