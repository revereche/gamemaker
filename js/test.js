$(document).ready(function() {
    var again = require('./js/testagain.js');

    $("#stage").append("<div id='bg'></div>");
    $("#stage").append("<div id='sprite'></div>");

    $("#btn1").click(function() {
        $("#bg").animate({
          width: "300px",
          left: "10%"
        });
    });

});
