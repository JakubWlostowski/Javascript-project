function znajdz2() {
    if (window.sessionStorage) {
        document.getElementById('header').style.backgroundColor = window.sessionStorage.kolor;
    }
}
function podmiana2() {
    if (window.sessionStorage) {
        var color = document.getElementById("dostosuj_naglowek").value;
        window.sessionStorage.setItem("kolor", color);
        document.getElementById('header').style.backgroundColor = window.sessionStorage.kolor;
    }
}