function garden(flower, num, budget) {
    num = Number(num);
    budget = Number(budget);
    let price;
    switch (flower) {
        case "Roses":
            price = 5;
            break;
        case "Dahlias":
            price = 3.80;
            break;
        case "Tulips":
            price = 2.80;
            break;
        case "Narcissus":
            price = 3;
            break;
        case "Gladiolus":
            price = 2.5
            break;
    }

    let discount = 1

    if (flower === "Roses" && num > 80) {
        discount = 0.90
    }
    if (flower === "Dahlias" && num > 90) {
        discount = 0.85
    }
    if (flower === "Tulips" && num > 80) {
        discount = 0.85
    }
    if (flower === "Narcissus" && num < 120) {
        discount = 1.15
    }
    if (flower === "Gladiolus" && num < 80) {
        discount = 1.20
    }
    let finalPrice = price * num * discount


    if (finalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${num} ${flower} and ${(budget - finalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(finalPrice - budget).toFixed(2)} leva more.`)
    }
}

garden("Dahlias",
    "112",
    "460")