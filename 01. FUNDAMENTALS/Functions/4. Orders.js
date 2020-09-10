function solve(product, num) {
    let totalPrice = 0;
    switch (product) {
        case "coffee":
            totalPrice = (1.5 * num).toFixed(2);
            break
        case "water":
            totalPrice = (1 * num).toFixed(2);
            break;
        case "coke":
            totalPrice = (1.4 * num).toFixed(2);
            break;
        case "snacks":
            totalPrice = (2 * num).toFixed(2);
            break;
    }
    return totalPrice
}

console.log(solve("water", 5))

