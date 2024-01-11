function createNewItem(itemName, itemQuantity, itemPrice) {
    var newItem = document.createElement("li");
    newItem.className = "list-group-item list-group-item-success d-flex justify-content-between align-items-center";

    newItem.setAttribute("data-quantity", itemQuantity);
    newItem.setAttribute("data-price", itemPrice);

    newItem.innerHTML = `
        <div class="d-flex align-items-center">
            <input type="checkbox" class="mr-1 checkbox-input"> 
            <span id="artikel" class="item-name">${itemName}</span>
            <span  class="quantity-input">${itemQuantity}x</span>
            <span id="preis" class="price-input">${itemPrice}€</span>
        </div>
        <div class="d-flex justify-content-end ">
            <button id="btnDelete" class="btn btn-danger btn-sm" onclick="deleteItem(this)">Löschen</button>
            <button class="btn btn-primary btn-sm" onclick="editItem(this)">Ändern</button>
        </div>
    `;

    return newItem;
}
