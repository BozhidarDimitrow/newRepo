function hotel(mounth, nights) {
    nights = Number(nights);

    let studio
    let app

    switch (mounth) {
        case "May":
        case "October":
            studio = 50;
            app = 65;
            break;
        case "June":
        case "September":
            studio = 75.2;
            app = 68.7;
            break;
        case "July":
        case "August":
            studio = 76;
            app = 77;
            break;
        default:
            break;
    }
    let discountSt 
    let discountApp
    if (nights > 7) {
        switch (mounth) {
            case "May":
            case "October":
                discountSt = 0.95;
        }
    } else if (nights > 14) {
        discountApp = 0.9;
        switch (month) {
            case "May":
            case "October":
                discountSt = 0.70;
                break;
            case "June":
            case "September":
                discountSt = 0.8;
                break;
        }
        
    }
      let totAp = app * discountApp * nights
      let totSt = studio * discountSt * nights
    console.log(`Apartment: ${(totAp).toFixed(2)} lv.`)
    console.log(`Studio: ${totSt} lv.`)

}
hotel("May",
"15")