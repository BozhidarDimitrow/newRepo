function solve(array1, array2) {

    let firstNum = Number(array2[0]);
    let secondNum = Number(array2[1]);
    let thirdNum = Number(array2[2]);

    let newArray = array1.slice(0, firstNum);
    newArray.splice(0, secondNum);
    let sum = 0;
    for (let i = 0; i < newArray.length; i++) {
        if (Number(newArray[i]) === thirdNum) {
            sum += 1
        }
    }

    console.log(`Number ${thirdNum} occurs ${sum} times.`)


}
solve([5, 2, 3, 4, 1, 6],
    [5, 0, 3])