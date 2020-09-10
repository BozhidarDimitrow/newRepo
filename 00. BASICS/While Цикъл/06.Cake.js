function solve(array) {
    let wide = Number(array[0]);
    let long = Number(array[1]);
    let torta = wide * long;
    let i = 2;
    let parcheta = 0;

    while (i < array.length) {
              
        if (array[i] === "STOP"){
            break;
        } else {
            parcheta = parcheta + Number(array[i]);
        }
        i++
    }

    if (parcheta > torta) {
        console.log(`No more cake left! You need ${parcheta - torta} pieces more.`);

    } else {
        console.log(`${torta - parcheta} pieces are left.`)
    }


}

solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"])