function solve(array) {
    let currenNum = Number(array[0]);
    
    let i = 0;
    let sumPrimeNum = 0;
    let sumNonPrimeNum = 0;

    while (i < array.length) {
        if (array[i] === "stop") {
            break;
        }
        currenNum = Number(array[i]);
        nonPrimeNum = false;
        primeNum = false
        let j = 2;

        while (j < currenNum) {
            
            
            if (currenNum % j === 0) {
                nonPrimeNum = true;
                break;
            } else {
                primeNum = true;
            }
            j++
        }
        if (currenNum < 0){
            console.log("Number is negative.");
        }
        if (currenNum === 0 || currenNum === 1 || currenNum === 2){
            sumPrimeNum += currenNum
        }
        if (nonPrimeNum) {
            sumNonPrimeNum += currenNum;
        } else if (primeNum) {
            sumPrimeNum += currenNum;
        }
        i++
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`)
}
solve(["30",
"83",
"33",
"-1",
"20",
"stop"])
