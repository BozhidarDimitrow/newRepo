function solve(text) {

    let pattern = />>(?<name>\w+)<<(?<price>[0-9.]+)!(?<quantity>[0-9]+)/;

    let sum = 0
    let nameArray = []
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'Purchase') {
            break;
        } else if (text[i].match(pattern)) {
            let item = text[i].match(pattern);
            let name = item.groups["name"];
            let price = Number(item.groups["price"]);
            let quantity = Number(item.groups["quantity"]);
            nameArray.push(name)
            sum += price * quantity;
        }
    }

    if (nameArray.length > 0) {
        console.log(`Bought furniture:`);
        console.log(nameArray.join("\n"));
        console.log(`Total money spend: ${sum.toFixed(2)}`);
    }
}



solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']
)