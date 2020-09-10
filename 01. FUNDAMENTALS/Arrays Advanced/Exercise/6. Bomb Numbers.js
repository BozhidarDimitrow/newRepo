function solve(array, arr) {

    let bombNum = Number(arr[0]);
    let numPower = Number(arr[1])

    for (let i = 0; i < array.length; i++) {

        let chislo = Number(array[i])
        if (chislo === bombNum) {
            let chislo2 = i - numPower;
            if((i-numPower) < 0){
                chislo2 = 0
            }
            array.splice(chislo2, (numPower + numPower + 1));
            i = -1
        }
    }


    let sum = 0
    for (let i of array) {
        sum += i
    }



    console.log(sum.toFixed(0))

}
solve([1, 4, 2, 2,2,4, 2, 4, 2, 9],
    [4, 2])



