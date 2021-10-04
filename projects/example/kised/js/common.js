$(document).ready(function() {
    $(".dp2").hide();

    $(".gnb > li").on("mouseenter", function() {
        $(this).children(".dp2").stop().slideDown(300);
    });

    $(".gnb > li").on("mouseleave", function() {
        $(this).children(".dp2").stop().slideUp(300);
    });
});