function solve(array) {

    let k = Number(array[0]);
    array.shift();
    let newArray2 = [];

    for (let i = 0; i < k; i++) {
        newArray2.push(array[i]);
    }
    let newArray3 = []
    for (let i = array.length - k; i < array.length; i++) {
        newArray3.push(array[i]);
    }
    console.log(newArray2.join(" "))
    console.log(newArray3.join(" "))
}
solve([3,
    6, 7, 8, 9])