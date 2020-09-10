function solve(array) {
    
    array.sort((a,b) => a.localeCompare(b))
    let productArray = [];
    let obj = {}
    array.forEach(element => {
        let token = element.split(" : ");
        obj[token[0]] = Number(token[1])
    });
    let sorted = obj
    

    for (let element in sorted) {
        productArray.push(element, sorted[element])
    }

    for (let i = 0; i < productArray.length - 1; i += 2) {
        var firstStringChar = productArray[i].charAt(0);
        if (i != 0) {

            var previousLetter = productArray[i - 2].charAt(0)
            if (firstStringChar !== previousLetter) {
                console.log(firstStringChar)
                console.log(`  ${productArray[i]}: ${productArray[i + 1]}`)
            } else {
                console.log(`  ${productArray[i]}: ${productArray[i + 1]}`)
            }
        } else {
            console.log(firstStringChar)
            console.log(`  ${productArray[i]}: ${productArray[i + 1]}`)
        }
    }


}
solve(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",]
)