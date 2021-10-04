$(document).ready(function () {
    $(".depth2").hide();

    $(".gnb > li").on("mouseenter", function() {
        $(this).children(".depth2").stop().slideDown(500);
    });

    $(".gnb > li").on("mouseleave", function() {
        $(this).children(".depth2").stop().slideUp(500);
    });
});