function convertor(num, a, b) {
    num = Number(num)
    if (a === "m") {
        if (b === "cm") {
        console.log ((num*100).toFixed(3));
        } else {
            console.log((num*1000).toFixed(3))
        }
    }
    if (a === "cm") {
        if (b === "m") {
        console.log ((num*0.01).toFixed(3));
        } else {
            console.log((num*10).toFixed(3))
        }
    }
    if (a === "mm") {
        if (b === "m") {
        console.log ((num*0.001).toFixed(3));
        } else {
            console.log((num*0.1).toFixed(3))
        }
    }
}
convertor("150", "m", "cm")