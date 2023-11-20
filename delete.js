function deleteItem(element) {
  var listItem = element.closest('li');
  var deletedQuantity = parseFloat(listItem.getAttribute("data-quantity"));
  var deletedPrice = parseFloat(listItem.getAttribute("data-price"));

  // Hier wird der Gesamtpreis aktualisiert, indem die Menge und der Preis des gelöschten Artikels subtrahiert werden
  gesamtpreis -= deletedQuantity * deletedPrice;
  updateGesamtpreis();

  listItem.remove();
  updateLocalStorage();
}