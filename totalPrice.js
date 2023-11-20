
function updateGesamtpreis() {
    var gesamtpreis = 0.00;
    var itemList = document.getElementById("itemList").children;

    for (var i = 0; i < itemList.length; i++) {
        var item = itemList[i];
        var itemQuantity = parseFloat(item.getAttribute("data-quantity"));
        var itemPrice = parseFloat(item.getAttribute("data-price"));

        if (!isNaN(itemQuantity) && !isNaN(itemPrice) && itemQuantity > 0 && itemPrice > 0) {
            gesamtpreis += itemQuantity * itemPrice;
        }
    }

    // Hier wird der Gesamtpreis mit dem Euro-Zeichen rechts neben der Zahl aktualisiert
    document.getElementById("gesamtpreis").textContent = "Gesamtpreis: €" + gesamtpreis.toFixed(2);
}