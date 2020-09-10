function solve(array) {
    let newArray = []
    let i = 0
    while (i < array.length) {
        let num = Number(array[i]);
        if (num >= 0) {
            newArray.push(num)
        } else {
            newArray.unshift(num)
        }
        i++
    }

let j = 0
    while (j < newArray.length) {
        console.log(newArray[j])
        j++
    }

}

solve([7, -2, 8, 9])