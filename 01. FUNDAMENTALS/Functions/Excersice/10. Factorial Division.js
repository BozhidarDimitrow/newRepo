function solve(num1, num2) {
    
    function factorial(a) {
        let factorial = 1;
        for (let i = 1; i <= a; i++){
            factorial = factorial*i;
        }
        return factorial
    }
    console.log((factorial(num1) / factorial(num2)).toFixed(2))

}

solve(0, 0)