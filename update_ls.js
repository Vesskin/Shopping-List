function updateLocalStorage() {
  var itemList = document.getElementById("itemList").getElementsByTagName("li");
  var itemsArray = [];

  for (var i = 0; i < itemList.length; i++) {
      var item = itemList[i];
      var itemName = item.querySelector(".item-name").textContent;
      var itemQuantity = parseFloat(item.getAttribute("data-quantity"));
      var itemPrice = parseFloat(item.getAttribute("data-price"));
      var checkbox = item.querySelector("input[type='checkbox']");
      var isChecked = checkbox.checked;

      itemsArray.push({
          name: itemName,
          quantity: itemQuantity,
          price: itemPrice,
          checked: isChecked
      });

      
      console.log(itemName, isChecked);
  }

  localStorage.setItem("shoppingList", JSON.stringify(itemsArray));
}