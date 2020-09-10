function source(array) {

    let name = array[0];
    let i = 1;
    let skysvane = 0
    let uspeh = 0
    let sum = 0;
    while (i < array.length) {

        if (Number(array[i]) < 4) {
            skysvane++
        }
        if (skysvane === 2) {
            console.log(`${name} has been excluded at ${i - 1} grade`);
            break;
        }


        sum += Number(array[i])


        i++
    }


    uspeh = sum / (i - 1);
    if (skysvane < 2) {
        console.log(`${name} graduated. Average grade: ${uspeh.toFixed(2)}`)
    }


}

source(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])