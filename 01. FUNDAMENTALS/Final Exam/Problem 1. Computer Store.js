function solve(input) {

    let sum = 0
    let typePrice = input.slice(input.length - 1);
    let discount = false
    if (typePrice[0] === "special") {
        discount = true;
    }
    input = input.slice(0, input.length - 1)

    for (let i = 0; i < input.length; i++) {
        let current = Number(input[i]);
        if (current <= 0) {
            console.log("Invalid price!");
            continue;
        } else {
            sum += current;
        }
    }
    let taxes = sum * 0.2
    let totalPrice = sum + taxes;
    if(discount){
        totalPrice = totalPrice * 0.9
    }
    if(totalPrice === 0){
        console.log("Invalid order!" );
    }else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}
solve([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ])