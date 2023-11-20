
var gesamtpreis = 0;

function updateGesamtpreis() {
    var gesamtpreisElement = document.getElementById("gesamtpreis");
    gesamtpreisElement.textContent = "Gesamtpreis: " + gesamtpreis.toFixed(2);
}
