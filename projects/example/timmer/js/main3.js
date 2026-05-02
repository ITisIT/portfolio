$(document).ready(function() {
    var theme = {
        bg : ["morning","afternoon","evening","night"],
        txtColor : {
            def : ["#000","#000","#fff","#fff"],
            span : ["#888","#777","#444","#bbb"],
            sub: ["#000","#000","#000","#fff"]
        }
    }

    function setTheme(item){
        $("#container").css("backgroundImage",`url(images/bg_${theme.bg[item]}.jpg)`);
        $("figure").css("backgroundImage",`url(images/phone_${theme.bg[item]}.png)`);
        $("h2").css("color",theme.txtColor.def[item]);
        $("h2 span").css("color",theme.txtColor.span[item]);
        $("h2 p").css("color",theme.txtColor.sub[item]);

        // console.log(item / 2);
        //console.log(parseInt(item / 2));

        $("h1 img").eq(parseInt(item / 2)).show().siblings().hide();
    }

    var now = new Date();
    var hours = now.getHours();
    function clock() {
        now = new Date();
        hours = now.getHours();
        var mins = now.getMinutes();
        var secs = now.getSeconds();

        if(hours<10){hours=`0${hours}`}
        if(mins<10){mins=`0${mins}`}
        if(secs<10){secs=`0${secs}`}

        $(".hh").text(hours);
        $(".mm").text(mins);
        $(".ss").text(secs);
    }
    clock();
    setInterval(clock,500);

    $("nav div").on("click", function() {
        var i = $(this).index();
        
        setTheme(i);
    });

    var initialTheme = parseInt((hours - 5) / 4);
    if(initialTheme >= 0) {
        setTheme(initialTheme);       
    } else if(initialTheme <= 0) {
        setTheme(3);
    }
    console.log(initialTheme);



});