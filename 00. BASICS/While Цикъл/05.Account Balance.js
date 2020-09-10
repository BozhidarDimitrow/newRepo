function source(array) {

    let i = 0; 
    let suma = 0;
    let income = 0

    while (i < array.length && array[i] !== "NoMoreMoney") {
       
         income = Number(array[i])

        if (income < 0){
            console.log("Invalid operation!")
            break;
        }
            console.log(`Increase: ${income.toFixed(2)}`);
            suma += income;
        i++
    }

console.log(`Total: ${(suma).toFixed(2)}`)

}


source(["120",
"45.55",
"-150"])