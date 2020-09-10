function lily(years, washPrice, toyPrice) {
    years = Number(years);
    washPrice = Number(washPrice);
    toyPrice = Number(toyPrice);

    let podaryci = 0;
    let kinti = 0;
    
let sumnovo =  0
    for (let i = 1; i <= years; i++) {
        if (i % 2 == 0) {
            kinti += 10;
           sumnovo = kinti + sumnovo -1

        } else {
            podaryci++
        }
    }
let totalCash = sumnovo + (podaryci * toyPrice)

    if (totalCash >= washPrice) {
    console.log(`Yes! ${(totalCash - washPrice).toFixed(2)}`);
} else {
    console.log(`No! ${Math.abs(washPrice - totalCash).toFixed(2)}`)
}

}
lily("21", "1570.98", "3")