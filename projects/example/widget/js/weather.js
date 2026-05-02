$(document).ready(function() {
    var apiKey = "e55a015743a559b2da7a658eca40c9ef";
    var success = function(pos) {
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        console.log(lat, lon);

        var apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&units=metric&appid=${apiKey}`;
        console.log(apiCall);

        fetch(apiCall).then(function (_data) { // 호출 메서드
            return _data.json();
        }).then(function (currentWeather) {
            console.log(currentWeather);
            var city = currentWeather.name;
            var temp = currentWeather.main.temp;
            var desc = currentWeather.weather[0].icon;
            var disc = currentWeather.weather[0].description;
            console.log(desc);

            $("span.ico").css("backgroundImage", `url(http://openweathermap.org/img/wn/${desc}@2x.png)`);
            $("span.disc").text(disc);
            $("span.city").text(city);
            $("span.temp").text(temp);
        }); 
    };

    var arr = function (err) {
        console.log(err);
    };

    navigator.geolocation.getCurrentPosition(success, arr);
});