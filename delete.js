function deleteItem(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);

    updateLocalStorage();
  }