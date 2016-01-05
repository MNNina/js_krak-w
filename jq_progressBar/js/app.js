/**
 * Created by Ninja on 2015-12-18.
 */
$(document).ready(function() {


    //1 zmienne : wszystkie progress-bary, wszystkie buttony
    //2 a)dodać do guzików event click
    //  b)wypisać data-set w consoli
    //3 znaleźć ten element o podanym id który mnie interesuje dla spana
    //4 zabrać mu wszystkie klasy
    //5 dodać klase o podanym kolorze
    //6 wyanimować zmiany szerokości



    //stwarzam zmienne ///do bhagaskary --skills-- procentowe narastanie
    var buttons =$(".change-bar");
    var allProgressBars=$(".progress-bar");
    buttons.on("click", function(event){
        //console.log("ok");
        var id =$(this).data("id");
        var color = $(this).data("color");
        var width = $(this).data("width");
        //console.log("zmieniam element o id bar" + "id" + "na szerokosć " + width + "kolor" + color); test

        //do zmiennej myProgressBar przypisujemy wszystkie progressBary ale filtrujemy po id
        var myProgressBar = allProgressBars.filter("#bar" + id);
        //console.log(allProgressBars);
        //console.log(myProgressBar);
        //do zmiennej mySpan szukamy all span z myProgressBar
        var mySpan =myProgressBar.find("span");
        //console.log(mySpan);
        //usuwamy z mySpan wszystkie klasy
        mySpan.removeClass();
        //  ale dajemy do mySpan klase zmienną color w której znajduje się znaleziony kolor
        mySpan.addClass(color);
        // animujemy mySpan, dodajemy mu zmienną width którą znaleźliśmy wyżej z prędkością 1000milisekund
        mySpan.animate({
            width:width
        }, 1000);
    });



});