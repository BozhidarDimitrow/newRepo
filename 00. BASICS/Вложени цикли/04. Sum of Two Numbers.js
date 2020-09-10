function solve(array) {
    let num1 = Number(array[0]);
    let num2 = Number(array[1]);
    let num3 = Number(array[2]);
    let combination = 0;
    let i = 0;
    let j = 0;
    for (i = num1; i <= num2; i++) {
        let isCombinationFound = false;

        for (j = num1; j <= num2; j++) {
            combination++
            if ((i + j) === num3) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${num3})`)
                isCombinationFound = true
                break;
            }
        }
        if (isCombinationFound) {
            break;
        }
    }
    if ((i + j) != num3) {
        console.log(`${combination} combinations - neither equals ${num3}`)
    }
}
solve(["88", 
"888", 
"2000"])