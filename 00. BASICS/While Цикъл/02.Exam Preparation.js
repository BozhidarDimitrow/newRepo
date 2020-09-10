function solve(array) {

    let broiSlabi = 0;
    let i = 1;
    let sumOcenki = 0;
    let broiOcenki = 0
    while (array[i] !== "Enough") {
        
        if (Number.isNaN(Number(array[i]))){
        sumOcenki = sumOcenki;
        } else {
            sumOcenki = sumOcenki +  Number(array[i]);
        }
        broiOcenki = broiOcenki + 0.5;
        if (array[i] <= 4) {
            broiSlabi++
        }
        if (broiSlabi == Number(array[0])) {
            console.log(`You need a break, ${broiSlabi} poor grades.`)
            break;
        }


        i++
    }
    avScore = sumOcenki / broiOcenki
    if (broiSlabi < Number(array[0])) {
        console.log(`Average score: ${(avScore).toFixed(2)}`);
        console.log(`Number of problems: ${(i - 1) / 2}`)
        console.log(`Last problem: ${array[i - 2]} `);
    }

}
solve(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])