function solve(array){
let sborEven = 0;
let sborOdd = 0;


    num = Number(array[0]);

    for (num of array) {
        if (num % 2 === 0) {
            sborEven += num;
        } else {
            sborOdd += num;
        }
    }


console.log(sborEven - sborOdd)

}

solve([2,4,6,8,10])