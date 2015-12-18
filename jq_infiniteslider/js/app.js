/**
 * Created by Ninja on 2015-12-17.
 */
$(document).ready(function() {


    //stwarzamy zmienna ul dla której szukamy wszsytkich ul z klasy slider
    var ul =$(".slider ul");
    // stwarzamy zmienna dla której szukamy pierwszego dziecka ul
    var firstUlchild = ul.first().children();
    // stwarzamy zmienna dla której szukamy ostatniego dziecka ul
    var lastUlchild = ul.last().children();

    //dla pierwszego dziecka dodajemy przed ostatnim sklonowane ostatnie dziecko
    firstUlchild.before(lastUlchild.clone());
    //dla ostatniego dziecka dodajemy za ostatnim sklonowane pierwsze dziecko
    lastUlchild.after(firstUlchild.clone());

    //stwarzamy zmienną pictures dla której szukamy wszystkich img z klasy slider
    var pictures = $(".slider img");
    //szukamy buttona nex i prev
    var nextButton =$('#nextPicture');
    var prevButton =$('#prevPicture');
    //ustalamy zmienna z jej szerokością
    var pictureWidth =400;
    //stwarzamy zmienna z wartością początkową
    var currentPicture =0;
    //dla ul w css wyciągamy szerokośc, szerokośc obrazka z naszej zmiennej * dlugośc obrazków plus "px"
    ul.css("width", pictureWidth * pictures.length +"px");
    ul.css("left", -currentPicture *pictureWidth + "px");


// ustawiamy click na naszym next butoonie
    nextButton.on("click", function(event){
        //ogbrazki rosną co jeden
       currentPicture++;
            //dla ul stwarzamy animacje mówiącą że nasze obrazki poruszają się w lewo o jeden minus naszej pozycji wyjściowej
            // * szerokośc naszego obrazka plus pixele
            ul.animate({
                "left": -currentPicture * pictureWidth + "px"

            }, 1000, function(){
                //z prędkością 1000milisekund jeżeli początkowa wartość jest taka sama jak dlugośc obrazków minus 1
                if(currentPicture === pictures.length -1){
                    //to nasza poczatkowa wartość równa się jeden
                    currentPicture =1;
                    //a nasz ul przesuwa się w lewo minus jedna wartość początkowa * szerokość plus px
                    ul.css("left", -currentPicture *pictureWidth + "px");

                }
            })
                });

   //dla naszego prev buttona ustawiamy click
    prevButton.on("click", function(event){
        // obrazki maleja o jeden bo się chowają w lewo
        currentPicture--;
        //jeżeli nasza wartość jest większa od jeden to obrazek naszej wartosci równa się 0
        if(currentPicture < 0){
            currentPicture = 0;
        }
        //albo wywołujemy animacje na ul która ma za zadanie odejmować jeden obrazek w lewo z jego szerokościa plus pixelami
        else{
            ul.animate({
                "left": -currentPicture * pictureWidth +"px"

            }, 1000, function(){ // z predkością 1000milisekund
                //jeżeli nasz obrazek poczatkowy jest taki sam jak dlugosc obrazków -2
                if(currentPicture === pictures.length -2){
                    //nasz obrazek równa się 0
                    currentPicture =0;
                    //a dla naszego ul przypinamy poprzez css animacje w lewo minus jedena szerokość jednego obrazja + px
                    ul.css("left", -currentPicture *pictureWidth + "px");

                }
            });

        }

    });





});