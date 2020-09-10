function solve(input) {


    let bottlesObj = {}
    let smallArray = []

    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(" => ");
        let name = token[0];
        let quantity = Number(token[1]);
        if (quantity >= 1000) {
            if (bottlesObj[name] === undefined) {
                bottlesObj[name] = quantity
            } else {
                bottlesObj[name] += quantity
            }
        } else {
            let found = false
            for (let i = 0; i < smallArray.length; i += 2) {
                let currnetName = smallArray[i];
                let currnetQuantity = smallArray[i + 1];
                if (name === currnetName) {
                    if ((quantity + currnetQuantity) >= 1000) {
                        bottlesObj[name] = (quantity + currnetQuantity)
                        smallArray.splice(i, 2)
                    } else {
                        smallArray.splice(i, 2, currnetName, (currnetQuantity + quantity))
                    }
                    found = true
                    break;
                }
            }
            if (!found) {
                smallArray.push(name, quantity)
            }

        }
    }

    for (let i = 0; i < smallArray.length; i += 2) {
        let currnetName = smallArray[i];
        let currnetQuantity = smallArray[i + 1];
        if (bottlesObj[currnetName] !== undefined) {
            bottlesObj[currnetName] += currnetQuantity
        } else if (currnetQuantity >= 1000) {
            bottlesObj[currnetName] = currnetQuantity
        }
    }

    for (let key in bottlesObj) {
        console.log(`${key} => ${Math.floor(bottlesObj[key] / 1000)}`);
    }

}
solve(['Orange => 200',
    'Peach => 432',
    'Banana => 450',
    'Peach => 600',
    'Orange => 800'])