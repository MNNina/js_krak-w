/**
 * Created by Ninja on 2015-12-18.
 */
$(document).ready(function() {


    //aby to ogarnąc trzeba zrozumieć matematyke dwuwymiarowych elementów
    var scene=$(".scene");
    var elements = $(".scene .element");

    var oldMousePositionX =0;
    var oldMousePositionY =0;

    //console.log(scene);
    //console.log(elements);

    elements.each(function(index, element){
        //console.log(elements);
        var jqElement =$(element);
        jqElement.css({ ///kod by ustawić w odpowiednich miejscach wartości
            "z index" : jqElement.data("z"),
            "left": jqElement.data("x"),
            "top": jqElement.data("y")
        });
    });

    scene.on("mousenter", function(event){
        oldMousePositionX =event.offsetX;
        oldMousePositionY=event.offsetY;

    });
    scene.on("mousemove", function(event){
        var currentMousePositionX =event.offsetX;
        var currentMousePositionY =event.offsetY;



        //likwiduje brzydki przeskok po najechaniu na diva
        if(event.target !== this){
            currentMousePositionY += parseFloat($(event.target).css("top"));
            currentMousePositionX += parseFloat($(event.target).css("left"));
            //mouseMoveX =0;
            //mouseMoveY=0;

        }

        var mouseMoveX = currentMousePositionX - oldMousePositionX;
        var mouseMoveY = currentMousePositionY - oldMousePositionY;
        //console.log(event);



        console.log("****");
        //console.log(mouseMoveX);
        //console.log(mouseMoveY);
        console.log(event);

        elements.each(function (index, element){
            var jqElement =$(element);
            var speed = jqElement.data("speed");
            //console.log(typeof speed);
            jqElement.css({
                "left": "+=" +(mouseMoveX *speed),
                "top": "+=" + (mouseMoveY *speed)

            });

        });


        oldMousePositionX = currentMousePositionX;
        oldMousePositionY = currentMousePositionY;
    });




});