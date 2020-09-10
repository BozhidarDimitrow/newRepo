function solve(input) {



    let townsArray = []
    for (let i = 0; i < input.length; i++) {
        let token = input[i].split("|");
        let town = token[0].trim();
        let product = token[1].trim();
        let price = Number(token[2].trim());
        let exist = false
        if (townsArray.length === 0) {
            newObj = {}
            newObj[product] = [town, price]
            townsArray.push(newObj)
            continue;
        }
        for (let j = 0; j < townsArray.length; j++) {
            let currentObj = townsArray[j]
            if (Object.keys(currentObj)[0] === product) {
                let values = Object.values(townsArray[j])[0]
                let searchedTownExist = false
                for (let k = 0; k < values.length; k += 2) {
                    if (values[k] === town) {
                        if (values[k + 1] < price && values[k + 3] <= price) {
                            values.splice(0, 2)
                        } else if (price < values[1]) {
                            values.unshift(price)
                            values.unshift(town)
                        } else {
                            values.splice(k + 1, 1, price);
                            currentObj[product] = values
                            searchedTownExist = true
                            exist = true
                        }
                    }
                }
                if (!searchedTownExist) {
                    if (values[1] > price) {
                        values.unshift(price)
                        values.unshift(town)
                    }
                    values.push(town, price)
                    exist = true
                }
            }
        }
        if (!exist) {
            newObj = {}
            newObj[product] = [town, price]
            townsArray.push(newObj)
        }
    }



    for (let i = 0; i < townsArray.length; i++) {
        for (const key in townsArray[i]) {

            console.log(`${key} -> ${townsArray[i][key][1]} (${townsArray[i][key][0]})`);
        }

    }
}
solve(["Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "New York City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Mexico City | Audi | 100000",
    "Washington City | Mercedes | 1000"
])