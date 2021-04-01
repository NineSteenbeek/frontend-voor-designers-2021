/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=2759794&units=metric&appid=1e708882b9761257c32a03e958c5594b', function (data) {

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp) + " Degrees";
    var weather = data.weather[0].main;

    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);

});

