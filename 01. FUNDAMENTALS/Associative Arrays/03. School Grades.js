function solve(array) {
    let map = new Map
    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" ");
        let name = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);
        if (!map.has(name)) {
            map.set(name, []);
            map.set(name, map.get(name).concat(grades));
        } else {
            map.set(name, map.get(name).concat(grades))
        }
    }

    let studententries = Array.from(map.entries())
    let sortedStudents = studententries.sort((a, b) => {
        let studentGradesA = a[1];
        let studentGradesB = b[1];
        let averageGradeA = getAvgrade(studentGradesA);
        let averageGradeB = getAvgrade(studentGradesB);
        return averageGradeA - averageGradeB
    })


    function getAvgrade(grades){
        let gradesSum = 0;
        for (const grade of grades) {
            gradesSum += grade
        }
        return gradesSum / grades.length
    }


    // let sorted = Array.from(map).sort((a, b) => average(a, b));

    // function average(a, b) {
    //     let aSum = 0;
    //     for (let i = 0; i < a[1].length; i++) {
    //         aSum += a[1][i];
    //     }
    //     let bSum = 0;
    //     for (let i = 0; i < b[1].length; i++) {
    //         bSum += b[1][i]
    //     }
    //     let aAverage = aSum / a[1].length;
    //     let bAverage = bSum / b[1].length;
    //     return aAverage - bAverage
    // }

    for (let kvp of sortedStudents) {

        console.log(`${kvp[0]}: ${kvp[1].join(", ")}`)
    }


}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])