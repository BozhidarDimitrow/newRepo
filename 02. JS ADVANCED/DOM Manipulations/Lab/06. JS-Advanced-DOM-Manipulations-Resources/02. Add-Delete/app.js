function addItem() {
    let newItem = document.getElementById("newText").value
    let oldList = document.getElementById("items")
    let newDiv = document.createElement("li")
    function handler(e) {
        let element = e.target;
       oldList.removeChild(element.parentElement)
    }

    newDiv.textContent = newItem + "   "
    oldList.appendChild(newDiv)
    let newA = document.createElement("a")
    newA.textContent = "[Delete]";
    newA.setAttribute("href", "#")
    newA.addEventListener("click", handler)
    
    newDiv.appendChild(newA)

    document.getElementById("newText").value = ""



}