/**
 * Created by Ninja on 2015-12-17.
 */
$(document).ready(function() {



    //tworzymy zmiennna pictures dla której znajdujemy wszsykie img z klasy slider
    var pictures = $(".slider img");
    // tworzymy zmienna nextButton dla której znajdujemy nasz nextPicture to samo z buttonem prev
    var nextButton =$('#nextPicture');
    var prevButton =$('#prevPicture');
    // tworzymy zmiennna width dla której ustalamy szserokość
    var pictureWidth =400;
    //tworzymy zmienna ul dla której znajdujemy wszystkie ul z klasy slider
    var ul =$(".slider ul");
    //stwarzamy zmienna początkowa
    var currentPicture =0;
    //dla ul w css przypisujemy szerokość, szerokość naszej zmiennej oraz mnożymy razy długośc naszych zdjeć oraz dodajemy "px" czyli px
    ul.css("width", pictureWidth * pictures.length +"px");
    //dla ul w css przyisujemy pozycje , minusowa pozycje naszej wartości poczatkowej razy nasza szerokość plus "px"
    ul.css("left", -currentPicture *pictureWidth + "px");


    //na nextButonie wywołujemy event click
    nextButton.on("click", function(event){
        // co sprawia że zdjęcie będzie się dodawać o jeden więcej
       currentPicture++;
        //jeżeli nasz początkowy obrazej jest większy badz równy długości obrazków
        if(currentPicture >= pictures.length){
            //wtedy nasz obrazek poczatkowy będzie się rónać długoćsi obrazków minus 1
            currentPicture = pictures.length - 1;
        }
        //albo
        else {
            //dla naszego ul stwarzamy animacje
            ul.animate({
                //która przybiera wartosc dla ul pozycji oraz wartości początkowej
                "left": -currentPicture * pictureWidth + "px"

            }, 1000);
        }

    });
 // to samo wywołujemy na buttonie prev
    prevButton.on("click", function(event){
        //odejmujemy zdjęcie
        currentPicture--;
        //jeżeli obrazek startowy jest większy od zera
        if(currentPicture < 0){
            //to nasz obrazek ma równać sie 0 czyli być na pierwszym planie inaczej
            currentPicture = 0;
        }
        else{
            //albo dla ul stwarzamy animacje
            ul.animate({
                //dla pozycji lewej obrazek -1obrazek poczatkowy plu "px"
                "left": -currentPicture * pictureWidth +"px"
            //z predkością 1000 milisekund ????
            }, 1000);
        }

    });





});