function solve(input) {

    let income = []
    let object = {}

    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let newIncome = Number(input[i + 1])
        if (object[town] === undefined) {
            object[town] = newIncome
        } else {
            object[town] += newIncome
        }
    }
    console.log(JSON.stringify(object));

}
solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4'])