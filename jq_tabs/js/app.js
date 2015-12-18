/**
 * Created by Ninja on 2015-12-17.
 */
$(document).ready(function() {

    //tworzymy zmienne dla listitems
    // zmienna dla wszystkich divów
    //listitems.each(function( index, element){
    //stwarzamy zmienna previusVisible=-1(start)trzyma numer widocznej

    var tabs =$(".tabs li"); //dla zmiennej szukamy z jquery wszsytkich li z klasy tabs
    var divs = $(".tabs div");//dla zmiennej szukamy z jquery wszsytkich div z klasy tabs
    var currentVisibleElement = -1; //niema wartości jest -1 jest niewidoczny// wartośc poczatkowa

    tabs.each(function(index, element){ // dla każdej li z .tabs uzywamy funckje each
    $(element).on("click", function(event){ //na każdym elemencie wywołujemy funkcje click
        if(currentVisibleElement !== -1 && //jest różne !==
            currentVisibleElement !== index){ //jeśli nasza wartość początkowa jest rózna od indexu
            divs.eq(currentVisibleElement).hide();// nie hidden!!! nasze divy z indeksu ukryj
        }
        currentVisibleElement = index; //zawsze przypisujemy index do tej zmiennej
        divs.eq(currentVisibleElement).show(); //zawsze go pokazujemy dla tej zmiennej w danym indexie

    });

    });

});