$(document).ready(function($) {
    var horz = 0,
    vert = 0;

    $("#stage").append("<div id='bg'></div>");
    $("#stage").append("<div id='sprite'></div>");

    $("body").keydown(function(e) {
        console.log(e);
        //right
        if (e.which == 39 || e.which == 68) {
          console.log("I heard it!");
          horz += 10;
            $("#bg").animate({
                left: horz + "%"
            }, 10);
        }
        //left
        if (e.which == 37 || e.which == 65) {
          console.log("I heard it!");
          horz -= 10;
            $("#bg").animate({
                left: horz + "%"
            }, 10);
        }
        //up
        if (e.which == 38 || e.which == 87) {
          console.log("I heard it!");
          vert -= 10;
            $("#bg").animate({
                top: vert + "%"
            }, 10);
        }
        //down
        if (e.which == 40 || e.which == 83) {
          console.log("I heard it!");
          vert += 10;
            $("#bg").animate({
                top: vert + "%"
            }, 10);
        }
    });


});
