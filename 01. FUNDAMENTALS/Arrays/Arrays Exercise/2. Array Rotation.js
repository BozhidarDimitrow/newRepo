function solve(array, num) {

    for (i = 0; i <= num - 1; i++) {
        array.push(array[0])        
        for (j = 0; j < array.length - 1; j++) {
            array[j] = array[j+1];                           
        }
        array.pop()
    }
    console.log(array.join(" "))

}

solve([51, 47, 32, 61, 21], 2)