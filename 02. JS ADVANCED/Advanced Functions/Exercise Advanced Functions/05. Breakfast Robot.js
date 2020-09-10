
let solution = (function() {
    let stock = {protein:0, carbohydrate:0, fat:0, flavour:0}
    return function (input) {
        let token = input.split(" ")
        let command = token[0];

        if (token[1] === "apple") {
            curRecipe = { carbohydrate: 1, flavour: 2 }
        }
        if (token[1] === "lemonade") {
            curRecipe = { carbohydrate: 10, flavour: 20 };
        }
        if (token[1] === "burger") {
            curRecipe = { carbohydrate: 5, fat: 7, flavour: 3 };
        }
        if (token[1] === "eggs") {
            curRecipe = { protein: 5, fat: 1, flavour: 1, };
        }
        if (token[1] === "turkey") {
            curRecipe = { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        }

        if (command === "restock") {
            return restock()

        }
        if (command === "prepare") {
            return prepare()

        }
        if (command === "report") {
            return (`protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`);
        }

        function restock() {
            if (stock[token[1]] === undefined) {
                stock[token[1]] = Number(token[2]);
            } else {
                stock[token[1]] += Number(token[2]);
            }
            return ("Success")

        }
        function prepare() {
            let enough = true;
            for (const key in curRecipe) {
                if (Number(curRecipe[key]) * Number(token[2]) > stock[key]) {
                    return (`Error: not enough ${key} in stock`);
                    enough = false
                    break;
                } else {
                    stock[key] -= Number(curRecipe[key]) * Number(token[2])
                }
            }
            if (enough) {
                return ("Success")
            }
        }


    }
})





let manager = solution();
console.log(manager("restock flavour 50"));  // Success
console.log(manager("prepare lemonade 4"));  // Error: not enough carbohydrate in stock
