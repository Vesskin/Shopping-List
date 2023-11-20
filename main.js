

function addItem() {
  var itemName = document.getElementById("input").value;
  var itemQuantity = document.getElementById("quantity").value;
  var itemPrice = document.getElementById("price").value;

  if (itemName.trim() !== "" && itemQuantity.trim() !== "" && itemPrice.trim() !== "") {
      var newItem = document.createElement("li");
      newItem.className = "list-group-item list-group-item-success d-flex justify-content-between align-items-center";
      
      newItem.innerHTML = `
          <div>
              <span>${itemName}</span>
              <span>Menge: ${itemQuantity}</span>
              <span>Preis: ${itemPrice}</span>
          </div>
          <button class="btn btn-danger btn-sm" onclick="deleteItem(this)">Löschen</button>
      `;
      
      document.getElementById("itemList").appendChild(newItem);
      document.getElementById("input").value = "";
      document.getElementById("quantity").value = "";
      document.getElementById("price").value = "";

      updateLocalStorage();
  }
}
