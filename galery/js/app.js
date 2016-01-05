/**
 * Created by Ninja on 2015-12-16.
 */
/*<div class="fullScreen">
    <img src="http://lorempixel.com/400/200/animals/2">
    <button class="close">close</button>

    </div>

    */


document.addEventListener("DOMContentLoaded", function() {
    //stwarzamy zmienna img i wyszukujemy dla niej img z .galery
        var img = document.querySelectorAll(".gallery img");
    //stwarzamy zmienna i wyszukujemy dla niej body nasze z htmla
        var body = document.querySelector("body");
        //w petli nasze i=0, ale i => miejsce w tablicy mniejsze od dlugosci obrazków z tablicy rosnie o jeden
        for( var i=0; i<img.length; i++) {
            //na naszej tablicy img wywolujemy event click
            img[i].addEventListener("click", function (event) {
                //console.log("click");
                //naszej zmiennej stworzonej przypisujemy wartosć getAttribute która ma za zadanie szukać
                // odnośników do zjdęć
            var imgSrc = this.getAttribute("src");
                //console.log(imgSrc);
                //dla nowej zmiennej stwarzamy element div
                var fullScreendiv = document.createElement("DIV");
                //dla nowej zmiennej stwarzamy element img
                var fullScreenimg = document.createElement("IMG");
                //dla nowej zmiennej stwarzamy element typu button
                var fullScreenbutton = document.createElement("BUTTON");

                //dla naszej zmiennej fullscrenndiv dodajemy clase z fullScreen
                fullScreendiv.classList.add("fullScreen");
                //dla naszej zmiennej fulscreenbutton dodajemy clase close
                fullScreenbutton.classList.add("close");
                //dla naszej zmiennej dodajemy text "close'' -- chociaż mi to nie działa
                fullScreenbutton.innerHtml = "CLOSE";
                //dla naszej zmiennej fullscreeimg dobieramy atrybut src czyli źródło oraz imgsrc
                fullScreenimg.setAttribute("src", imgSrc);
                //do naszego fulscreendiv dodajemy element jako ostatnie dzieckog
                fullScreendiv.appendChild(fullScreenimg);
                //do naszego fulscreendiv dodajemy element jako ostatnie dziecko
                fullScreendiv.appendChild(fullScreenbutton);
                // oba zdjęcie i button pojawiają się na całym wywołanym np ekranie a button jest w lewym górnym rogu,
                //dodajemy element jako ostatnie dziecko do węzła

                //na naszym wywolanym obrazku wywolujemy event clik
                fullScreenbutton.addEventListener("click", function(){
                    //po którym usuwamy klase by obrazek był na całym ekranie
                    //czyli wylączamy obrazek
                    body.removeChild(fullScreendiv);

                });
                //do naszego body dodajemy element jako ostatnie dziecko fullScreendiv
                body.appendChild(fullScreendiv);
            });


        }

});