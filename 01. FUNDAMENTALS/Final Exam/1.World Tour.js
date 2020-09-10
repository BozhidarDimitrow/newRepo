function solve(array) {

    let trip = array[0];

    for (let i = 1; i < array.length; i++) {
        let token = array[i].split(":");
        let command = token[0];
        let firstEl = token[1];
        let secondEl = token[2];
        if (command === "Travel") {
            console.log(`Ready for world tour! Planned stops: ${trip}`);
            break;
        } else if (command === "Add Stop") {
            firstEl = Number(firstEl);
            if (firstEl >= 0 && firstEl < trip.length && !isNaN(firstEl)) {
                let firstHalf = trip.substring(0, firstEl);
                let secondHalf = trip.substring(firstEl);
                trip = firstHalf + secondEl + secondHalf;               
            }
            console.log(trip);
        } else if (command === "Remove Stop") {
            firstEl = Number(firstEl);
            secondEl = Number(secondEl);
            if (firstEl >= 0 && firstEl <= secondEl && secondEl < trip.length && !isNaN(firstEl) && !isNaN(secondEl)) {
                let firstHalf = trip.substring(0, firstEl);
                let secondHalf = trip.substring(++secondEl);
                trip = firstHalf + secondHalf;               
            }
            console.log(trip);
        } else if (command === "Switch") {
            if (trip.includes(firstEl)) {
                const searchRegExp = new RegExp(firstEl, `g`)
                trip = trip.replace(searchRegExp, secondEl)
            }
            console.log(trip);
        } else {
            console.log(trip);
        }
    }

}
solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]
)