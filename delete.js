function deleteItem(button) {
  var listItem = button.closest("li");
  listItem.remove();

  updateLocalStorage();
  updateGesamtpreis();
}