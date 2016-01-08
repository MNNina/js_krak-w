/**
 * Created by Ninja on 2016-01-07.
 */
//zad ... z przedziału liczb (od najmniejszej do największej) pokaż liczby całkowite
//

function wypisz(){
    var liczba1 =document.getElementById("pole1").value;
    var liczba2 =document.getElementById("pole2").value;
    var napis="";

    for(i=liczba1; i<=liczba2; i++) {
        napis = napis + i + " ";
    }
        document.getElementById("wynik").innerHTML = napis;

}