function fishing(budget, season, num) {
    budget = Number(budget);
    num = Number(num);

    let boatPrice;
    switch (season) {
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            break;
        case "Spring":
            boatPrice = 3000;
            break;
        case "Winter":
            boatPrice = 2600;
            break;

    }
    let discount = 1
    if (num <= 6) {
        discount = 0.9
    } else if (num > 7 && num <= 11) {
        discount = 0.85
    } else if (num >= 12) {
        discount = 0.75
    }
   let extraDisc = 1
   if (num % 2 === 0 && season != "Autumn") {
       extraDisc = 0.95
   }

   let totalPrice = boatPrice * discount * extraDisc

   if (totalPrice <= budget) {
       console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`)
   } else {
       console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`)
   }

}
fishing(2000,
    "Winter",
    13)