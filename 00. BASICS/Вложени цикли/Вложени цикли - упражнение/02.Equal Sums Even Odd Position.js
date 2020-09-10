function solve(array) {
    let num1 = Number(array[0]);
    let num2 = Number(array[1]);
    let sumEven = 0;
    let sumOdd = 0;
    let printline = ""
    for (i = num1; i <= num2; i++) {
        textNum1 = String(i)
        sumEven = 0;
        sumOdd = 0;
        for (let j = 0; j < textNum1.length; j++) {
           let a = Number(textNum1.charAt(j))
            if (j % 2 === 0) {
                sumEven = sumEven + a;
            } else {
                sumOdd = sumOdd + a;
            }

        }
        if (sumOdd === sumEven) {
            printline += `${i} `
        }
    }
console.log(printline)
}
solve(["123456",
"124000"])