function znajdz()
{
    if (window.localStorage) {
        document.getElementById('container').style.fontFamily = window.localStorage.czcionka;
    }
    
}
function podmiana()
{
    if (window.localStorage) {
        var font = document.getElementById("dostosuj").value;
        window.localStorage.setItem("czcionka", font);
        document.getElementById('container').style.fontFamily = window.localStorage.czcionka;
    }
    
}