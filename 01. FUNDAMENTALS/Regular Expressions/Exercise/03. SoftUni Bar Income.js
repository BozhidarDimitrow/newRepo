function solve(input){

    let pattern = /[%](?<name>[A-Z][a-z]+)[%][^(|$%.)]*[<](?<product>\w+)[>][^(|$%.)]*[|](?<quantity>[0-9]+)[|][^(|$%.)]*?(?<price>[0-9]+[.]*[0-9]*)[$]/
   let sum = 0;
    for (let i = 0; i < input.length; i++) {
        
        if (input[i] === 'end of shift') {
            console.log(`Total income: ${sum.toFixed(2)}`);
            break;
        } else if (input[i].match(pattern)) {
            let item = input[i].match(pattern);
            let name = item.groups["name"];
            let product = item.groups["product"];
            let price = Number(item.groups["price"]);
            let quantity = Number(item.groups["quantity"]);
           console.log(`${name}: ${product} - ${(price*quantity).toFixed(2)}`);
            sum += price * quantity;
        }
    }

}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])