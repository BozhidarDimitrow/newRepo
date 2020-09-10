function solve(array) {

    for (let i = 0; i < array.length; i++) {
        let city = array[i].split(" | ");

        let cityObject = {
            town: city[0],
            latitude: Number(city[1]).toFixed(2),
            longitude: Number(city[2]).toFixed(2)
        }

        console.log((cityObject))
    }

}
solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])