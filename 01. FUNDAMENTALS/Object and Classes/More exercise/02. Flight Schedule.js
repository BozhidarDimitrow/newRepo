function solve(array) {

    let allFlights = array[0]
    let changingFlights = array[1];
    let statusSearch = array[2].join(" ");
    let airport = {}
    class Flight {
        constructor(flight, status) {
            this.flight = flight;
            this.status = status
        }
    }
    let flights = []
    allFlights.forEach(element => {
        let tokens = element.split(" ")
        let status = `Ready to fly`
        let flight = tokens[0]
        let destination = tokens.slice(1).join(" ")

        flights.push(flight, destination, status);
    })

    changingFlights.forEach(element => {
        let tokens = element.split(" ");
        newflightNumber = tokens[0];
        newStatus = tokens.slice(1).join(" ")
        for (let i = 0; i < flights.length; i++) {
            if (flights[i] === newflightNumber){
                flights[i+2] = newStatus;
                break;
            }
        }
    })



    for (let i = 0; i < flights.length; i++){
        if (flights[i] === statusSearch){
            let destination = flights[i-1];
            let status = statusSearch;
            airport = {Destination: destination, Status: status}
            console.log(airport)
        }
    }

}
solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])