function createNewItem(itemName, itemQuantity, itemPrice) {
    var newItem = document.createElement("li");
    newItem.className = "list-group-item list-group-item-success d-flex justify-content-between align-items-center";

    newItem.setAttribute("data-quantity", itemQuantity);
    newItem.setAttribute("data-price", itemPrice);

    newItem.innerHTML = `
        <div class="d-flex align-items-center">
            <input type="checkbox" class="mr-2 checkbox-input"> 
            <span class="item-name">${itemName}</span>
            <span class="quantity-input">${itemQuantity}x</span>
            <span class="price-input">${itemPrice}€</span>
        </div>
        <div>
            <button class="btn btn-danger btn-sm" onclick="deleteItem(this)">Löschen</button>
            <button class="btn btn-primary btn-sm" onclick="editItem(this)">Ändern</button>
        </div>
    `;

    return newItem;
}
