function toyShop(eks, p, ku, me, mi, ka) {

    eks = Number(eks)
    p = Number(p)
    ku = Number(ku)
    me = Number(me)
    mi = Number(mi)
    ka = Number(ka)
     
    let oborot = p * 2.60  + ku * 3 + me * 4.10 + mi * 8.20 + ka * 2
    let broi = p  + ku + me  + mi  + ka
    
    if (broi >= 50) {
        oborot = oborot * 0.75 ;
    
    }
    let rent = 0.1 * oborot;
    let pechalba = oborot - rent;


    if (pechalba >= eks) {

        console.log(`Yes! ${(pechalba - eks).toFixed(2)} lv left.`)

    } else {

        console.log (`Not enough money! ${(eks - pechalba).toFixed(2)} lv needed.`)
    }

}


toyShop("320", "8", "2", "5", "5", "1")
