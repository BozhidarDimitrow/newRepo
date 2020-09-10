function solve(array1, array2) {
    let productArr = []
    let prod = {}

    for (let i = 0; i < array1.length - 1; i += 2) {
        prod[array1[i]] = Number(array1[i + 1])
    }

    for (let i = 0; i < array2.length - 1; i += 2) {
        if (prod[array2[i]] === undefined){   
            prod[array2[i]] = Number(array2[i + 1]) 
        } else {
        prod[array2[i]] += Number(array2[i + 1]) 
        }
    }

    for (let key in prod){
        console.log(`${key} -> ${prod[key]}`)
    }

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])