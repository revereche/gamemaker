$(document).ready(function() {
    var number = 10;
    var again = require('./js/testagain.js');

    $("#stage").append("<div id='bg'></div>");
    $("#stage").append("<div id='sprite'></div>");

    $("#btn1").click(function() {
        $("#bg").animate({
            left: number + "%"
        }, 1000);
        number += 10;
    });

});
