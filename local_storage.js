document.addEventListener("DOMContentLoaded", function () {
    var savedList = localStorage.getItem("shoppingList");
  
    if (savedList) {
      document.getElementById("itemList").innerHTML = savedList;
    }
  });