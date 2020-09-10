function solve(array) {
    let moneyNeeded = 0;
    let moneySaved = 0;
    let i = 1;
    let j = 2;
    let destination = array[0];
    let destinationChange = false

    while (array[i] !== "End") {
        moneyNeeded = Number(array[1]);

        if (destinationChange) {
            destination = array[i];
            moneyNeeded = Number(array[i + 1]);
            j = i + 2;
        }
        if (array[i] ==="End") {
            break;
        }

        while (array[j] != Number.isNaN(Number(array[j]))) {
            moneySaved = moneySaved + Number(array[j]);
            if (moneySaved >= moneyNeeded) {
                console.log(`Going to ${destination}!`);
                destinationChange = true
                moneySaved = 0;
                break;
            }
            j++
        }
        i = j + 1

    }
}

solve(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])