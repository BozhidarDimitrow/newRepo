function solve(array) {
    let trainers = Number(array[0]);
    let i = 1;
    let obshtUspeh = 0;
    let broiIzpiti = 0;

    while (i < array.length) {
        if (array[i] === "Finish") {
            break;
        }
        let j = i + 1;
        let exam = array[i];
        let ocenka = 0;

        while (j <= i + trainers) {
            ocenka = ocenka + Number(array[j]);


            j++
        }
        srednaOcenka = ocenka / trainers;
        console.log(`${exam} - ${(srednaOcenka).toFixed(2)}.`)
        i = j;
        broiIzpiti++
        obshtUspeh = ((obshtUspeh) * (broiIzpiti - 1)  + srednaOcenka) / broiIzpiti;

    }
    console.log(`Student's final assessment is ${obshtUspeh.toFixed(2)}.`)

}

solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])