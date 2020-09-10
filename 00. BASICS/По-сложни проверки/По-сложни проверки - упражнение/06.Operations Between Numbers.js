function operations(num1, num2, operation) {

    num1 = Number(num1);
    num2 = Number(num2);
    let result
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
    }
    let x
    if (result % 2 == 0) {
        x = "even"
    } else {
        x = "odd"
    }
    if ((operation === "/" && num2 == 0) || (operation === "%" && num2 == 0)) {
        console.log(`Cannot divide ${num1} by zero`)
    } else if (operation === "/") {
        console.log(`${num1} ${operation} ${num2} = ${(result).toFixed(2)}`);
    } else if (operation === "%") {
        console.log(`${num1} ${operation} ${num2} = ${result}`);
    }
    switch (operation) {
        case "+":
        case "-":
        case "*":
            console.log(`${num1} ${operation} ${num2} = ${result} - ${x}`);
            break;
    }


}
operations("123",
"12",
"/")