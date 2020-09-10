function Plodove(cenaQgodi, banani, portokali, malini, qgodi) {

let m = Number(cenaQgodi) / 2;
let p = m * 0.6;
let b = m * 0.2;

let a = Number(cenaQgodi) * Number(qgodi) + p * Number(portokali)  + m * Number(malini) + b * Number(banani);

console.log(a)
    
}

Plodove("48",
"10",
"3.3",
"6.5",
"1.7")