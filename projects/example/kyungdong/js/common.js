$(document).ready(function() {
    $(".depth2").hide();

    $(".gnb > li").hover(function() {
        $(this).children(".depth2").stop().slideToggle();
    });
});