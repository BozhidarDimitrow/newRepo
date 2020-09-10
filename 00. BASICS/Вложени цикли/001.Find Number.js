function solve(array) {
    let num = 16;
    let answer = 0;
    if (num <= Number(array[2])) {
        newArray = array.slice(0, 3);
    } else {
        newArray = array.slice(3, 6);
    }

    if (num > Number(newArray[0]) && num < Number(newArray[2])) {
        answer = Number(newArray[1]);
    } else if (num === Number(newArray[0])) {
        answer = Number(newArray[0]);
    } else {
        answer = Number(newArray[2]);
    }

console.log(answer)
}

solve(["1", "3", "5", "6", "9", "16", "19"])




//Number(textNum1.charAt(j))