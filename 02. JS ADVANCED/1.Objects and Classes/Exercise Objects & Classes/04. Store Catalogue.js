function solve(input) {

    let productObj = {}

    for (let i = 0; i < input.length; i++) {
        let token = input[i].split(" : ")
        let name = token[0];
        let price = Number(token[1]);
        productObj[name] = price;
    }

    const ordered = {};
    Object.keys(productObj).sort().forEach(function (key) {
        ordered[key] = productObj[key];
    });
    let prodArray = []

    for (let key in ordered) {
       prodArray.push(key, ordered[key])
    }

    for (let i = 0; i < prodArray.length; i +=2){
        let firstLetter = prodArray[i][0];
        if (i === 0){
            console.log(firstLetter);
            console.log(`  ${prodArray[i]}: ${prodArray[i+1]}`);
        } else if (firstLetter !== prodArray[i-2][0]) {
            console.log(firstLetter);
            console.log(`  ${prodArray[i]}: ${prodArray[i+1]}`);
        } else {
            console.log(`  ${prodArray[i]}: ${prodArray[i+1]}`);
        }
    }


}
solve(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)