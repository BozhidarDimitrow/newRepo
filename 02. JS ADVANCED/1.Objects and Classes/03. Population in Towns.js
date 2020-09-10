function solve(input) {

    let townObj = {};
    let objArray = []

    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(" <-> ");
        let town = token[0];
        let population = Number(token[1]);
        if (townObj[town] === undefined) {
            townObj[town] = population
        } else {
            townObj[town] += population
        }
    }

    for (let key in townObj) {
        console.log(`${key} : ${townObj[key]}`);
    }

}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])