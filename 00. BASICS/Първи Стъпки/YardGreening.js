function greening(sqm){
let a = sqm * 7.61;
let b = a * 0.18;
let c = a - b;

console.log(`
The Final price is: ${c} lv.
The discount is: ${b} lv.
`)

}

greening("150")