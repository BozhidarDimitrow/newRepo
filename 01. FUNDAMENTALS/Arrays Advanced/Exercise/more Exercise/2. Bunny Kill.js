function solve(array) {


    let bunnyShot = array.pop()
    .split(" ")


    array.pop()


    let field = []
    for (let i = 0; i < array.length; i++) {
        field.push(Array(array[i]))
    }


    for (let i = 0; i < bunnyShot.length; i++) {
        let x = field[bunnyShot[0]]
        let strenght = Number(x[bunnyShot[1]])
    }


    console.log(strenght)

}
solve(['10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'])