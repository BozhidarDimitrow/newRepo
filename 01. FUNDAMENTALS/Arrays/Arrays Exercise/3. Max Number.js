function solve(array) {

    for (let i = 0; i <= array.length; i++) {

        for (let j = 0; j < array.length; j++) {
           
            if (array[j] <= array[j + 1]) {
                array.splice(j, 1);
                
            }

        }

    }
    console.log(array.join(" "))
}

solve([1, 4, 3, 2]
    )