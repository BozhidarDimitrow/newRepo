function solve(array) {

    let map = new Map

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

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1])
    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`)
    }


}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])