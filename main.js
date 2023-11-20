

function addItem() {
    var itemName = document.getElementById("input").value;
    var itemQuantity = parseFloat(document.getElementById("quantity").value);
    var itemPrice = parseFloat(document.getElementById("price").value);

    if (itemName.trim() !== "" && !isNaN(itemQuantity) && !isNaN(itemPrice) && itemQuantity > 0 && itemPrice > 0) {
        var newItem = document.createElement("li");
        newItem.className = "list-group-item list-group-item-success d-flex justify-content-between align-items-center";

        // Hier wird die Menge und der Preis als Attribute gespeichert
        newItem.setAttribute("data-quantity", itemQuantity);
        newItem.setAttribute("data-price", itemPrice);

        newItem.innerHTML = `
            <div>
                <span class="item-name">${itemName}</span>
                <span class="quantity-input">Menge: ${itemQuantity}</span>
                <span class="price-input">Preis: ${itemPrice}</span>
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteItem(this)">Löschen</button>
        `;

        document.getElementById("itemList").appendChild(newItem);
        document.getElementById("input").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("price").value = "";

        updateLocalStorage();

        // Hier wird der Gesamtpreis aktualisiert, indem die Menge und der Preis des neuen Artikels hinzugefügt werden
        gesamtpreis += itemQuantity * itemPrice;
        updateGesamtpreis();
    }
}