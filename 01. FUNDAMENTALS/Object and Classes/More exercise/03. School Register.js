function solve(array) {

    let nameArray = [];
    let currentGradeArray = [];
    let avScoreArray = []
    array.forEach(element => {
        tokens = element.split(", ")
        let name = tokens[0];
        let currentGrade = tokens[1];
        let avScore = tokens[2];
        nameArray.push(name);
        currentGradeArray.push(currentGrade);
        avScoreArray.push(avScore)
    });

    function separator(array, separator) {
        let newArray = []
        array.forEach(element => {
            tokens = element.split(separator)
            let name = tokens[1];
            newArray.push(name)
        })
        return newArray
    }
    let newNameArray = separator(nameArray, ": ")
    let newCurrentGradeArray = separator(currentGradeArray, ": ")
    let newAvScoreArray = separator(avScoreArray, ": ")

    let schoolArray = []

    for (let i = 0; i < newCurrentGradeArray.length; i++) {
        let studentName = newNameArray[i]
        let studentAvScore = newAvScoreArray[i]
        if (studentAvScore >= 3) {
            nextGrade = Number(newCurrentGradeArray[i]) + 1;
            let studentArray = [];
            studentArray.push(nextGrade, studentName, studentAvScore);
            schoolArray.push(studentArray)
        }


    }
    let sorted = schoolArray.sort((a, b) => a[0] - b[0])
    let lastPrinted = -1
    for (let i = 0; i < sorted.length; i++) {
        let grade = Number(sorted[i][0]);
        let name = sorted[i][1];
        let avGrade = sorted[i][2];
        if (i === sorted.length -1) {
            
            console.log(`${grade} Grade `);
            let listOfStudents = []
            let sum = 0
            for (let j = lastPrinted + 1; j <= i; j++) {
                listOfStudents.push(sorted[j][1])
            }
            console.log(`List of students: ${listOfStudents.join(", ")}`)
            for (let j = lastPrinted + 1; j <= i; j++) {
                sum += Number(sorted[j][2])
            }

            avGradeclass = (sum / (i - lastPrinted)).toFixed(2)
           
            console.log(`Average annual grade from last year: ${avGradeclass}`)
            console.log()

        } else if (grade !== Number(sorted[i + 1][0])) {
            console.log(`${grade} Grade`);
            let listOfStudents = []
            let sum = 0
            for (let j = lastPrinted + 1; j <= i; j++) {
                listOfStudents.push(sorted[j][1])
            }
            console.log(`List of students: ${listOfStudents.join(", ")}`)
            for (let j = lastPrinted + 1; j <= i; j++) {
                sum += Number(sorted[j][2])
            }

            avGradeclass = (sum / (i - lastPrinted)).toFixed(2)
            lastPrinted = i
            console.log(`Average annual grade from last year: ${avGradeclass}`)
            console.log()

        }


    }
}


solve(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])