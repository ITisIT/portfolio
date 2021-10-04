$(document).ready(function() {  // 문서 준비 이벤트
     // 맨위로가기 버튼
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }
    });

    $("#gotop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

     //스크롤트리거
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

    //상단고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#header").addClass("fix");
        } else {
            $("#header").removeClass("fix");
        }
    });

    //gnb
    $(".depth2, .depth2_bg").hide();

    $(".gnb > li").on("mouseenter", function() {
        $(".depth2, .depth2_bg").stop().slideDown();
    });

    $(".gnb > li").on("mouseleave", function() {
        $(".depth2, .depth2_bg").stop().slideUp();
    });

    // mainSlide
    $(".ms").slick ({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    // searchBox - toggle
    $(".searchBox").hide();

    $(".btnSearch").on("click", function() {
        $(".btnSearch a").toggleClass("on");    // 검색 아이콘 클릭 시 toggleClass로 on클래스 추가 및 제거 실행
        $(".searchBox").fadeToggle();   // 동시에 검색 박스 나타나거나 사라짐
    });

    // event
    $(".event").slick ({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false
    });

    // news
    // .tab안에 h4를 클릭했을 때
    // .tab안에 부모 요소(li)에 active클래스 추가
    // 클릭한 형제 요소에 active 클래스 제거
    $(".tab > li:nth-child(1)").addClass("active");

    $(".tab > li > h4").on("click", function() {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // art
    $(".artList").slick ({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        dots: false
    });
});