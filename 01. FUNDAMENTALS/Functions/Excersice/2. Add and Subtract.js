function addOrSubtract(num1, num2, num3) {
    let d = num3;
    let sum = (a, b) => a + b;
    let c = sum(num1, num2);
    let subtract = (x, y) => x - y;


    return subtract(c, d)

}

console.log(addOrSubtract(23, 6, 10))