function solve(input) {

    // let pattern = /[\w.]+/

    let keys = input[0].split("|").slice(1, input[0].length - 1)

    let key1 = keys[0].trim();
    let key2 = keys[1].trim();
    let key3 = keys[2].trim();

    townsArray = []
    for (let i = 1; i < input.length; i++) {
        let token = input[i].split("|").slice(1,input[i].length - 1)
        let info1 = token[0].trim()
        let info2 = Number(token[1].trim()).toFixed(2)
        let info3 = Number(token[2].trim()).toFixed(2)
            let newObj = { [key1]: info1, [key2]: Number(info2), [key3]: Number(info3) };
            townsArray.push(newObj)
                   
    }

    console.log(JSON.stringify(townsArray));

}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])