function solve(array) {
let sum = 0;
let newSum = 0;
let newArray = []

    for (i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        let newNum = 0;
        sum += num;
        if (num % 2 === 0) {
            newNum = num + i;
            
        } else {
            newNum = num - i;

        }
        newArray[i] = newNum;
        newSum += newNum;    


    }
console.log(newArray);
console.log(sum);
console.log(newSum)

}
solve([-5, 11, 3, 0, 2])