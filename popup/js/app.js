/**
 * Created by Ninja on 2015-12-17.
 */
$(document).ready(function() {

            var myPopup =$("#popup");
            var x =$("#button");

            if (document.cookie.indexOf(myPopup) < 0) {

                setTimeout(function () {
                    $(myPopup).fadeIn(300);
                }, 15000);
            }
    x.on("click", function(event){
        //console.log("dziala");
        $(myPopup).fadeOut();

    });


});