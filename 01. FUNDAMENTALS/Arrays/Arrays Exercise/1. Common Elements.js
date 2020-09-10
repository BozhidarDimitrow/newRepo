function solve(array1, array2) {

    for (let i = 0; i < array1.length; i++) {

        for (let j = 0; j < array2.length; j++) {
            if (array2[j] === array1[i]) {
                console.log(array2[j])
            }
        }
    }


}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])