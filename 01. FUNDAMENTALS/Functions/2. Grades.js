function solve(grade) {

    if (grade >= 2.00 && grade < 3) {
        return "Fail";
    } else if (grade >= 3.00 && grade < 3.5) {
        return "Poor";
    } else if (grade >= 3.50 && grade < 4.5) {
        return "Good";
    } else if (grade >= 4.50 && grade < 5.5) {
        return "Very good";
    } else if (grade >= 5.50 && grade <= 6) {
        return "Excellent";
    }
}

console.log(solve(4.2))