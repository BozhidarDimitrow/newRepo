function FishTank(l, w, h, pr) {

let v = Number(l) * Number(w) * Number(h) / 1000
let a = v * (100 - Number(pr)) / 100

console.log(a)

}

FishTank("85","75","47","17")
