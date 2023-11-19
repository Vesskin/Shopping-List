

function addItem() {
    var inputValue = document.getElementById("input").value;
    if (inputValue.trim() !== "") {
      var newItem = document.createElement("li");
      newItem.className = "list-group-item list-group-item-success";
      newItem.innerHTML = inputValue + ' <button class="btn btn-danger btn-sm" onclick="deleteItem(this)">Löschen</button>';
      document.getElementById("itemList").appendChild(newItem);
      document.getElementById("input").value = "";

      updateLocalStorage();
    }
  }
