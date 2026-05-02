$(document).ready(function () {

    $(".dp2,.dp2_bg").hide();

    $(".gnb>li").mouseenter(function () {
        $(".dp2,.dp2_bg").stop().slideDown();
    });
    $(".gnb>li").mouseleave(function () {
        $(".dp2,.dp2_bg").stop().slideUp();
    });

});
