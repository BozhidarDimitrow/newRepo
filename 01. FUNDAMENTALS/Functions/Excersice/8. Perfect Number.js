function solve(num) {

    function isPerfect(a) {
        let sum = 0;
        for (let i = 0; i <= a / 2; i++) {
            if (a % i === 0) {
                sum += i;
            }
            if (sum === a) {
                return true;
            } else if (sum > a) {
                break;
            }
        }
    }

    
    if (isPerfect(num)) {
        console.log(`We have a perfect number!`)
    } else {
        console.log(`It's not so perfect.`)
    }

}

solve(17)