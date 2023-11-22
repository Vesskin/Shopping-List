function updateItem(existingItem, newQuantity, newPrice) {
    existingItem.setAttribute("data-quantity", newQuantity);
    existingItem.setAttribute("data-price", newPrice);

    var quantityElement = existingItem.querySelector(".quantity-input");
    var priceElement = existingItem.querySelector(".price-input");

    quantityElement.textContent = newQuantity + "x";
    priceElement.textContent = newPrice + "€";
}