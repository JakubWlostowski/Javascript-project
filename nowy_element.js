function nowy() {
    var element = document.createElement('div');
    var tekst = document.createTextNode('123456789');

    element.appendChild(tekst);
    document.getElementById("numer_tel").appendChild(element);
}