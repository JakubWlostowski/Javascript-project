function czas() {
    var time = new Date();

    var dzien = time.getDate();
    var miesiac = time.getMonth() + 1;
    var rok = time.getFullYear();
    var godzina = time.getHours();
    if (godzina < 10) godzina = "0" + godzina;

    var minuta = time.getMinutes();
    if (minuta < 10) minuta = "0" + minuta;
    var sekunda = time.getSeconds();
    if (sekunda < 10) sekunda = "0" + sekunda;

    document.getElementById("zegar").innerHTML = dzien + "/" + miesiac + "/" + rok + "|" + godzina + ":" + minuta + ":" + sekunda;

    setTimeout("czas()", 1000);
}



