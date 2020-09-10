function solve(array) {

    let sorted = array.sort((a, b) => a - b)
    let length = sorted.length
    let newarray = []
    
    for (i = 0; i < length; i++) {
        let biggest = sorted.pop()
        let smallest = sorted.shift()
        newarray.push(biggest, smallest)
    }



    console.log(newarray.join(" "))




}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])