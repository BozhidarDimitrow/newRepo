function skiTrip(days, rType, feedback) {
    days = Number(days);
    let nigths = days - 1
    let discount
    if (nigths < 10) {
        switch (rType) {
            case "room for one person":
                discount = 1;
                break;
            case "apartment":
                discount = 0.7;
                break;
            case "president apartment":
                discount = 0.1;
                break;

        }
    } else if (nigths >= 10 && days <= 15) {
        switch (rType) {
            case "room for one person":
                discount = 1;
                break;
            case "apartment":
                discount = 0.65;
                break;
            case "president apartment":
                discount = 0.85;
                break;

        }
    } else if (nigths > 15) {
        switch (rType) {
            case "room for one person":
                discount = 1;
                break;
            case "apartment":
                discount = 0.5;
                break;
            case "president apartment":
                discount = 0.8;
                break;

        }
    }
    let tip
    if (feedback === "positive") {
        tip = 1.25;
    } else if (feedback === "negative") {
        tip = 0.9;
    }


    switch (rType) {
        case "room for one person":
            console.log((nigths * 18 * discount * tip).toFixed(2));
            break;
        case "apartment":
            console.log((nigths * 25 * discount * tip).toFixed(2));
            break;
        case "president apartment":
            console.log((nigths * 35 * discount * tip).toFixed(2));
            break;

    }


}

skiTrip("30",
"president apartment",
"negative")