/**
 * Created by Ninja on 2016-01-07.
 */

var number = Math.floor(Math.random() * 5) + 1;
var timer1 =0;
var timer2 =0;

function ustawSlajd(nrslajdu){
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = nrslajdu -1;

    schowaj();
    setTimeout("zmienSlajd()",500);
}

function schowaj(){
    $("#slider").fadeOut(500);
}

function zmienSlajd() {
    number++;
    if (number > 5)number = 1;
    var plik = "<img src=\"img/slajd" + number + ".jpg\"/>";
    document.getElementById("slider").innerHTML = plik;
    $("#slider").fadeIn(500);
    timer1 = setTimeout("zmienSlajd()", 5000);
    timer2 =setTimeout("schowaj()", 4500);

}
