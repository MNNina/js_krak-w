/**
 * Created by Ninja on 2016-01-07.
 */
//sprawdz czy liczba jest dodatnia, ujemna czy równa zero
 //a: pobierz wartośc z pola edycyjnego
 //b: podejmij decyzje jaka to liczba
 //c:wyświetl odpowiedni komentarz
function sprawdz(){
  var liczba = document.getElementById("pole").value;
   if(liczba>0)document.getElementById("wynik").innerHTML="dodatnia";
    else if (liczba<0)document.getElementById("wynik").innerHTML="ujemna";
    else if(liczba == 0) document.getElementById("wynik").innerHTML="zero";
    else document.getElementById("wynik").innerHTML="to nie jest liczba";


}