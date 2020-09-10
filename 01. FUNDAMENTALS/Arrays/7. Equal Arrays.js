function solve(array1, array2) {
    num1 = Number(array1[0]);
    num2 = Number(array2[0]);
    let sum = 0;
    let notIdentical = false;

    for (i = 0; i < array1.length; i++) {
        if (Number(array1[i]) === Number(array2[i])) {
            sum += Number(array1[i])
        } else {
            notIdentical = true
        }

        if (notIdentical) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            break;
        }
    }

    if (notIdentical === false) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }

}

solve(['1'], ['10'])


