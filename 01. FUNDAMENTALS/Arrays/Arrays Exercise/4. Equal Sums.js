function solve(array) {
    let equalSum = false;
    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        let sumLeft = 0;
        let sumRight = 0;
        for (let j = 0; j < array.length; j++) {
            let num2 = Number(array[j])
            if (j < i) {
                sumLeft += num2;
            } else if (j > i) {
                sumRight += num2
            }
        }
        if (sumLeft == sumRight) {
            equalSum = true;
            console.log(i)
        }

    }
    if (equalSum === false) {
        console.log(`no`)
    }

}
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])