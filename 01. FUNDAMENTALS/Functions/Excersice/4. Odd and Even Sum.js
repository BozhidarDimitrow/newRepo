function oddAndEven(num) {
    let array = [];
    array = String(num);
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < array.length; i++) {
        let newNum = Number(array[i]);
        if (newNum % 2 === 0) {
            sumEven += newNum;
        } else {
            sumOdd += newNum;
        }
    }
    return (`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

console.log(oddAndEven(3495892137259234))