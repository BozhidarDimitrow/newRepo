function tradeCommisions(city, sails) {
    sails = Number(sails);
    if (sails >= 0 && sails <= 500) {
        switch (city) {
            case "Sofia":
                console.log((sails * 0.05).toFixed(2));
                break;
            case "Varna":
                console.log((sails * 0.045).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sails * 0.055).toFixed(2));
                break;
            default:
                console.log("error");
        }
    } else if (sails > 500 && sails <= 1000) {
        switch (city) {
            case "Sofia":
                console.log((sails * 0.07).toFixed(2));
                break;
            case "Varna":
                console.log((sails * 0.075).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sails * 0.08).toFixed(2));
                break;
            default:
                console.log("error");
        }
    } else if (sails > 1000 && sails <= 10000) {
        switch (city) {
            case "Sofia":
                console.log((sails * 0.08).toFixed(2));
                break;
            case "Varna":
                console.log((sails * 0.1).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sails * 0.12).toFixed(2));
                break;
            default:
                console.log("error");
        }
    } else if (sails > 10000) {
        switch (city) {
            case "Sofia":
                console.log((sails * 0.12).toFixed(2));
                break;
            case "Varna":
                console.log((sails * 0.13).toFixed(2));
                break;
            case "Plovdiv":
                console.log((sails * 0.145).toFixed(2));
                break;
            default:
                console.log("error");
        }
    } else {
        console.log("error");
    }
}

tradeCommisions("Kaspichan",
    "-50")