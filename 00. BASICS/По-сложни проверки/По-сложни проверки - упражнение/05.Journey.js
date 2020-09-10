function journey(budget, season) {
    budget = Number(budget);

    let destin = 1;
    let place 
    let spent
    
    
    if (budget <= 100) {
        destin = "Bulgaria";
        switch (season) {
            case "summer":
                spent = 0.3 * budget;
                place = "Camp"
                break;
            case "winter":
                spent = 0.7 * budget;
                place = "Hotel"
                break;
        }
    } else if (budget <= 1000) {
        destin = "Balkans"
        switch (season) {
            case "summer":
                spent = 0.4 * budget;
                place = "Camp"
                break;
            case "winter":
                spent = 0.8 * budget;
                place = "Hotel"
                break;
        }

    } else {
        destin = "Europe"
        spent = 0.9 * budget
        place = "Hotel"
    }
    
    console.log(`Somewhere in ${destin}`)
    console.log(`${place} - ${(spent).toFixed(2)}`)
}

journey("678.53", "winter")