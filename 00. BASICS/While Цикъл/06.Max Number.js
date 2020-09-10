function source(array) {

    let i = 0
    let biggest = Number(array[0])

    while (array[i] !== "Stop") {

        if (biggest < Number(array[i])) {
            biggest = Number(array[i])
        }

        i++
    }

    console.log(biggest)


}


source(["45",
    "-20",
    "7",
    "99",
    "Stop"])