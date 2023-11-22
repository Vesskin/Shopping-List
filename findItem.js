function findExistingItem(itemName) {
    var items = document.getElementById("itemList").getElementsByClassName("item-name");

    for (var i = 0; i < items.length; i++) {
        if (items[i].textContent === itemName) {
            return items[i].closest("li");
        }
    }

    return null;
}