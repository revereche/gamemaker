$(document).ready(function($) {
    var horz = 0,
    vert = 0;
    var again = require('./js/testagain.js');

    $("#stage").append("<div id='bg'></div>");
    $("#stage").append("<div id='sprite'></div>");

    $("body").keydown(function(e) {
        console.log(e);
        //right
        if (e.which === 68) {
          console.log("I heard it!");
          horz += 10;
            $("#bg").animate({
                left: horz + "%"
            }, 500);
        }
        //left
        if (e.which === 65) {
          console.log("I heard it!");
          horz -= 10;
            $("#bg").animate({
                left: horz + "%"
            }, 500);
        }
        //up
        if (e.which === 87) {
          console.log("I heard it!");
          vert -= 10;
            $("#bg").animate({
                top: vert + "%"
            }, 500);
        }
        //down
        if (e.which === 83) {
          console.log("I heard it!");
          vert += 10;
            $("#bg").animate({
                top: vert + "%"
            }, 500);
        }
    });


/*
    function checkKeyDown(e) {
        var keyID = e.keyCode || e.which;
        if (keyID === 38 || keyID === 87) { //up arrow or W key
            MFlib.controls.up = true;
            e.preventDefault();
        }
        if (keyID === 39 || keyID === 68) { //right arrow or D key
            MFlib.controls.right = true;
            e.preventDefault();
        }
        if (keyID === 40 || keyID === 83) { //down arrow or S key
            MFlib.controls.down = true;
            e.preventDefault();
        }
        if (keyID === 37 || keyID === 65) { //left arrow or A key
            MFlib.controls.left = true;
            e.preventDefault();
        }
    }


    function checkKeyUp(e) {
        var keyID = e.keyCode || e.which;
        if (keyID === 38 || keyID === 87) { //up arrow or W key
            MFlib.controls.up = false;
            e.preventDefault();
        }
        if (keyID === 39 || keyID === 68) { //right arrow or D key
            MFlib.controls.right = false;
            e.preventDefault();
        }
        if (keyID === 40 || keyID === 83) { //down arrow or S key
            MFlib.controls.down = false;
            e.preventDefault();
        }
        if (keyID === 37 || keyID === 65) { //left arrow or A key
            MFlib.controls.left = false;
            e.preventDefault();
        }
    }
*/

});
