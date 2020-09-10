function solve() {
    let button = document.getElementsByTagName("button")[0]
    button.addEventListener("click", handler);


    let list = document.getElementsByTagName("ol")[0].children;

    function handler() {
        let inputFirst = document.getElementsByTagName("input")[0].value.toUpperCase();
        let inputRest = document.getElementsByTagName("input")[0].value.substring(1).toLowerCase();
        let numberOfFirstLetter = inputFirst.charCodeAt(0) - 65;
        let currentRow = list[numberOfFirstLetter];

        if (currentRow.textContent === "") {
            currentRow.textContent = inputFirst[0] + inputRest;
        } else {
            currentRow.textContent = currentRow.textContent + ", " + inputFirst[0] + inputRest;
        }
        document.getElementsByTagName("input")[0].value = ""

        
    }
    //TODO...
}