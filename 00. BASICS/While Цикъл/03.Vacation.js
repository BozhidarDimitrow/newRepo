function solve(array) {
    let excursionCost = Number(array[0]);
    let nalichni = Number(array[1]);
    let i = 2;
    let harchene = 0;
    let days = 0;

    while (i < array.length) {
        days++
        if (array[i] === "spend") {
            if (Number(array[i + 1]) >= nalichni) {
                nalichni = 0;
            } else {
                nalichni = nalichni - Number(array[i + 1]);
            }
            harchene++;
        }
        if (array[i] === "save") {
            nalichni = nalichni + Number(array[i + 1]);
            harchene = 0;
        }
        if (harchene == 5) {
            console.log(`You can't save the money.`)
            console.log(days);
            break;
        }  
        if (nalichni >= excursionCost) {
            console.log(`You saved the money for ${days} days.`);
            break;            
        }       
        i = i + 2;
    }
    
}

solve(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])