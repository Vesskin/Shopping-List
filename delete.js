function deleteItem(button) {
  var listItem = button.parentNode;
  listItem.remove();

  updateLocalStorage();

  // Hier wird der Gesamtpreis aktualisiert
  updateGesamtpreis();
}