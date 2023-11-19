function updateLocalStorage() {
    var itemListHTML = document.getElementById("itemList").innerHTML;
    localStorage.setItem("shoppingList", itemListHTML);
  }