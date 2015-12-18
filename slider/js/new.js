/**
 * Created by Ninja on 2015-12-03.
 */

document.addEventListener("DOMContentLoaded", function(){
//console.log('działa');
    //stwarzamy zmienna nextbutton podstawioną do clasy nextPicture
    var nextButton  = document.getElementById('nextPicture');
    //stwarzamy zmienną prexButton podstawioną do clasy prevPicture
    var prevButton = document.getElementById('prevPicture');
    //do zmiennej image wyszykujemy wszystkie elementy o clasie .slider li
    var image = document.querySelectorAll('.slider li');
    //ustawiamy wartość początkową naszego aktualnego obrazka
    var currentImage = 0;

    //do tablicy z aktualnymi obrazkami dodajemy clase z css visible
    image[currentImage].classList.add("visible");

    //na stwaorzonym buttonienext wywolujemy event click
    nextButton.addEventListener("click", function(event){
        //i wtedy po kliknięciu next z naszej tablicy obrazków usuwamy clase visible
        image[currentImage].classList.remove("visible");
        // dodajemy kolejny obrazek i dodajemy..
        currentImage ++;
         //ale jeżeli nasz ilość obrazków jest większa bądz róna długości naszej tablicy obrazków
        //nasz stan poczatkowy wraca do zera
            if(currentImage >= image.length){
               currentImage =0;

            }
        //i znów dodajemy do naszej tablicy klase visible
        //czyli dodajemy klase i obrazek wskakuje
        image[currentImage].classList.add("visible");
    });

   // na stworzonym buttonieprev dodajemy event click
    prevButton.addEventListener("click", function(event){
        // naszej tablicy obrazkow usuwamy clase visible
        image[currentImage].classList.remove("visible");
        //i obrazki uciekają//maleją// chowają sie
        currentImage --;
        // ale tylko jeśl nasza ilosc obrazków jest mniejsza od zera
        //żeby nie pokazało się -1
        if(currentImage <0){
            currentImage = image.length -1;
        }
        //dodajemy do naszej tablicy clase visible
        image[currentImage].classList.add("visible");

    });

});
