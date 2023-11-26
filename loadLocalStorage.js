document.addEventListener("DOMContentLoaded", function () {
    loadFromLocalStorage();
    updateGesamtpreis();
});


function loadFromLocalStorage() {
    var storedItems = localStorage.getItem("shoppingList");

    if (storedItems) {
        var itemsArray = JSON.parse(storedItems);

        for (var i = 0; i < itemsArray.length; i++) {
            var item = itemsArray[i];
            var newItem = createNewItem(item.name, item.quantity, item.price);

            
            newItem.querySelector("input[type='checkbox']").checked = item.checked;

            document.getElementById("itemList").appendChild(newItem);
        }
    }
}
