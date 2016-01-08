/**
 * Created by Ninja on 2016-01-08.
 */

var mojeHasla = [
    "Go beyond your limits",
    "Niech Moc będzie z tobą",
    "Srebro to Złoto które osiwiało",
    "Szczęśliwi kalorii nie liczą",
    "Hello from the other side",
    "Nic na siłe ale wszystko młotkiem",
    "Czasami najprostsze gesty znaczą więcej niż słowa",
    "Żeby nie jeść samotnie jem z telewizorem",
    "Stary zainwestuj w tic-taki bo ci jedzie",
    "Żwirek kręci z Muchomorkiem",
    "Jam Puszek Okruszek kto ze mną zadrze umarł w butach",
    "Johny i Pamela to moje kluseczki",
    "Neunundneunzig Luftballons"

]

var haslo = mojeHasla[Math.floor(Math.random() * mojeHasla.length)];
//var haslo ="lofciam Cię";
haslo = haslo.toUpperCase();
var ileSkuch = 0;

var dlugosc = haslo.length;
var haslo1 = "";
for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == " ")haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}


function wypiszHaslo() {
    document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";


function start() {
    var trescDiva = "";

    for (i = 0; i <= 34; i++) {
        var element = "lit" + i;
        trescDiva = trescDiva + '<div class ="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0)trescDiva = trescDiva + '<div style="clear:both;"></div>';

    }

    document.getElementById("alfabet").innerHTML = trescDiva;


    wypiszHaslo();
}

String.prototype.ustawZnak = function (miejsce, znak) {
    if (miejsce > this.length - 1)return this.toString();
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}


function sprawdz(nr) {
    var trafiona = false;
    for (i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i) == litery[nr]) {
            haslo1 = haslo1.ustawZnak(i, litery[nr]);
            trafiona = true;
        }

    }
    if (trafiona == true) {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "2px solid #00C00";
        document.getElementById(element).style.cursor = "default";


        wypiszHaslo();
    }
    else {
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "2px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        //skucha
        ileSkuch++;
        var obraz = "img/s" + ileSkuch + ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '"alt=""/>';
    }
    //wygrana
    if (haslo == haslo1) {
        document.getElementById("alfabet").innerHTML =
            "Tak jest! Podano prawidłowe Hasło: " + haslo +
            '<br/></br><span class="reset" onclick="location.reload()"> Jeszcze raz?</span>';
    }
    //przegrana

    if (ileSkuch >= 9) {
        document.getElementById("alfabet").innerHTML =
            "Przegrana! Prawidłowe Hasło to: " + haslo +
            '<br/></br><span class="reset" onclick="location.reload()"> Jeszcze raz?</span>';
    }

}