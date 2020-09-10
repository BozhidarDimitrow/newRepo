function addItem() {

    let newItem = document.getElementById("newItemText").value
    let oldList = document.getElementById("items")
    let newDiv = document.createElement("li")

    newDiv.textContent = newItem
    oldList.appendChild(newDiv)

    document.getElementById("newItemText").value = ""


}