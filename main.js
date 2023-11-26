

function addItem() {
    var itemName = document.getElementById("input").value;
    var itemQuantity = parseFloat(document.getElementById("quantity").value) || 0;
    var itemPrice = parseFloat(document.getElementById("price").value) || 0;

    
    if (
        itemName.trim() !== "" && 
        !isNaN(itemQuantity) && itemQuantity >= 0 && 
        !isNaN(itemPrice) && itemPrice >= 0 
    ) {
        var existingItem = findExistingItem(itemName);

        if (existingItem) {
            updateItem(existingItem, itemQuantity, itemPrice);
        } else {
            var newItem = createNewItem(itemName, itemQuantity, itemPrice);
            document.getElementById("itemList").appendChild(newItem);
        }

        document.getElementById("input").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("price").value = "";

        updateLocalStorage();
        updateGesamtpreis();
    } else {
        alert("Bitte geben Sie gültige Werte für Menge und Preis ein.");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var itemList = document.getElementById("itemList");
    itemList.addEventListener("change", function (event) {
        if (event.target.type === "checkbox") {
            updateLocalStorage();
        }
    });
});