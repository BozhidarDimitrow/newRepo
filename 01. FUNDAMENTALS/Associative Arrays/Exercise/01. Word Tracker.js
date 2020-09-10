function solve(array) {

    let map = new Map;
    let keyWords = array[0].split(" ")
    for (let word of keyWords) {
        map.set(word, []);
    }

    for (let i = 1; i < array.length; i++) {
        let checkedWord = array[i]
        let quantity = 1;

        if (map.has(checkedWord)) {
            let currentQuantity = map.get(checkedWord);
            let newQuantity = currentQuantity += quantity;
            map.set(checkedWord, newQuantity)
        }
    }
   
    let sorted = Array.from(map).sort((a,b) => b[1].length - a[1].length);
   
    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1].length}`)
    }

}

solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])