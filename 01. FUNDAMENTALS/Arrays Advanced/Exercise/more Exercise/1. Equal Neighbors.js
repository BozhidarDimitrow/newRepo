function solve(array) {

    let checkedArray = []
    let neighbours = 0;
    let nextArray = []

    for (let i = 0; i < array.length; i++) {
        checkedArray = array[i]
        for (j = 0; j < checkedArray.length - 1; j++) {
            if (checkedArray[j] === checkedArray[j + 1]) {
                neighbours++
            }
        }


    }

    for (let i = 0; i < array.length - 1; i++) {
        checkedArray = array[i]
        nextArray = array[i + 1]

        for (let j = 0; j < checkedArray.length; j++) {

            if (checkedArray[j] === nextArray[j]) {
                neighbours++
            }
        }

    }


    console.log(neighbours)
}
solve([["2", "2", "5", "7", "4"],
["4", "0", "5", "3", "4"],
["2", "5", "5", "4", "2"]])