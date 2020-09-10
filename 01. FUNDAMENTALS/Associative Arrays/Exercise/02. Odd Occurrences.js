function solve(string) {


    let map = new Map
    let array = string.toLowerCase().split(" ")




    for (let i = 0; i < array.length; i++) {
        let word = array[i]
        let quantity = 1;
        if (!map.has(word)) {
            map.set(word, +quantity);
        } else {
            let currentQuantity = map.get(word);
            let newQuantity = currentQuantity += quantity;
            map.set(word, newQuantity)
        }
    }

let newArray = []
    for (const kvp of map) {
        if (kvp[1] % 2 !== 0){
            newArray.push(kvp[0])
        }
    }

    console.log(newArray.join(" "))

}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')