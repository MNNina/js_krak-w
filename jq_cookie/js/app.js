/**
 * Created by Ninja on 2015-12-18.
 */
$(document).ready(function() {

var myCookie = $("#cookie-none");
var cookie =$(".cookie");
var button =$("button");

    //console.log(cookie);
    //console.log(button);

    if (document.cookie.indexOf(cookie) < 0) {

        setTimeout(function () {
            $(cookie).fadeIn(100);
        }, 300);
    }
    button.on("click", function(event){
        //console.log("dziala");
        $(this).parent().hide('slide', {direction: "left"},300);

    });



    });