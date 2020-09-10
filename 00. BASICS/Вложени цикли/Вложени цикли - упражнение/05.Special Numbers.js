function solve(array) {
    let num = Number(array[0]);
    let printline = ""

    for (let i = 1000; i < 10000; i++) {
        let textNum1 = String(i);
        for (let j = 0; j < 4; j++) {
            let a = Number(textNum1.charAt(j));
            if (num % a !== 0) {
                break;
            }
            if (j === 3) {
                printline += `${i} `
            }
        }
    }
    console.log(printline)
}
solve(["16"])




