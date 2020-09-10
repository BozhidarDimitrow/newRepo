function godzilla(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    let decor = 0.1 * a;
    
    if ( b > 150 ) {
        c = 0.9 * c
    }
    let stat = b * c
    let razhodi = decor + stat
    if ( razhodi > a ) {
        console.log(`Not enough money!
        Wingard needs ${(razhodi - a).toFixed(2)} leva more.`)
    } else {
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${(a - razhodi).toFixed(2)} leva left.`)
    }

}
godzilla("15437.62",
"186",
"57.99")