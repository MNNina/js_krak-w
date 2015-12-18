/**
 * Created by Ninja on 2015-12-17.
 */

//zbieramy zmienne które reprezentują wszystkie h1 należące do QA
//dodajemy im clika
//weź rodzeństwo czyli przez (this) i nastaw slide toggle
//


$(document).ready(function() {
    //stwarzamy zmienna h dla której z naszej klasy QA szukamy wszystkich h1
    var h = $(".QA h1");
    //stwarzamy zmienna p dla której z naszej klasy QA szukamy wszystich p
    var p = $(".QA p");
    //na h ustawiamy click
    $(h).on("click", function (event) {

        //$(this).next().slideToggle(100);
        //dla zmiennej jqThis przypisujemy this
        var jqThis =$(this);
        //stwarzamy zmienna myP do której wstawiamy this z metodą next
        var myP =jqThis.next();
        // nasze p jeśli nie jest naszym rozwiniętym p zwijamy w górę
        p.not(myP).slideUp();
        //inne my p rozwijamy
        myP.slideToggle();


    });

//to nie działa tak jak ma...;/


    //var  myP =jqthis.next();
    //p.not(myP).slideUp;
    //p.slideToggle();

    //if(visibleP ===null){
   // p.slideDown();
   // visibleP = p;
   //}
    // else{
    //visibleP.slideUp();
    //}






    //$(h).on("click", function(){
      //  $(this, "p").hide();

//    });

    //$(h).each("p", function(p){
       // $(this).addClass("QA p")
        //$(this).find(p).slideUp();








});