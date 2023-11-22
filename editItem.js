function editItem(editButton) {
    var listItem = editButton.closest("li");
    var itemName = listItem.querySelector(".item-name").textContent;
    var currentQuantity = parseFloat(listItem.getAttribute("data-quantity"));
    var currentPrice = parseFloat(listItem.getAttribute("data-price"));

    var newQuantity = prompt("Menge eingeben:", currentQuantity);
    var newPrice = prompt("Preis eingeben:", currentPrice);

    
    if (newQuantity !== null && newPrice !== null && !isNaN(newQuantity) && !isNaN(newPrice) && newQuantity > 0 && newPrice > 0) {
        updateItem(listItem, parseFloat(newQuantity), parseFloat(newPrice));

        
        updateLocalStorage();
        updateGesamtpreis();
    }
}