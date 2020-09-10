function Charity(dni, sladkari, torti, gofreti, palachinki) {

let t = Number(torti) * Number(dni) * Number(sladkari) * 45
let g = Number(gofreti) * Number(dni) * Number(sladkari) * 5.80
let p = Number(palachinki) * Number(dni) * Number(sladkari) * 3.20

console.log((t + g + p) * 7/8)

}

Charity("131",
"5",
"9",
"33",
"46")