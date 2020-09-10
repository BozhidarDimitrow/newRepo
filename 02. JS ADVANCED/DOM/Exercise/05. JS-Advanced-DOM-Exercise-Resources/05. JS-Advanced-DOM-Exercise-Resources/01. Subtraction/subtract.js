function subtract() {
    let firstNum = document.getElementById("firstNumber")
    let secondNum = document.getElementById("secondNumber")
    let result = Number(firstNum.value) - Number(secondNum.value)
    let resultField = document.getElementById("result")
    resultField.textContent = result;
    // console.log('TODO:...');
}