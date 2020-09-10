function cinema(array) {
    let i = 0;
    let j = 0;
    let totalStudent = 0;
    let totalStandart = 0;
    let totalKids = 0;
    let totalCinema = 0
    let totalMovie = 0;
    let student = 0;
    let standart = 0;
    let kids = 0;
    let movie = array[0]
    let freeSeats = Number(array[i + 1]);

    while (array[i] !== "Finish") {
        if (array[j] === "Finish") {
            break;
        }
        movie = array[i];
        freeSeats = Number(array[i + 1]);
        j = i + 2;
        student = 0;
        standart = 0;
        kids = 0;
        while (freeSeats !== 0) {
            if (array[j] === "End") {
               j = j + 1
                break;
            }
            if (array[j] === "Finish") {
                break;
            }
            if (array[j] === "standard") {
                standart++;
            } else if (array[j] === "student") {
                student++
            } else if ((array[j] === "kid")) {
                kids++
            }
            freeSeats--
            if (freeSeats === 0 && array[j+1] === "End") {
                j = j + 2
                break;
            } else if (freeSeats === 0){
                j = j + 1;
                break;
            }
            j++

        }

        totalMovie = standart + student + kids;
        totalCinema = totalCinema + totalMovie;
        totalStudent = totalStudent + student;
        totalStandart = totalStandart + standart;
        totalKids = totalKids + kids;
        console.log(`${movie} - ${((totalMovie) / (freeSeats + totalMovie) * 100).toFixed(2)}% full.`)
        i = j + 1;


    }
    if (totalCinema > 0) {
        console.log(`Total tickets: ${totalCinema}`)
    }
    if (totalStudent > 0) {
        console.log(`${(totalStudent / totalCinema * 100).toFixed(2)}% student tickets.`);
    }
    if (totalStandart > 0) {
        console.log(`${(totalStandart / totalCinema * 100).toFixed(2)}% standard tickets.`);
    }
    if (totalKids > 0) {
        console.log(`${(totalKids / totalCinema * 100).toFixed(2)}% kids tickets.`);
    }
}
cinema(["Shutter Island", "9", "standard", "standard", "standard", "student", "student", "student", "kid", "kid", "kid", "End",
    "Rush", "9",
    "standard", "standard", "standard", "student", "student", "student",
    "kid", "kid", "kid", "Deadpool", "9", "standard", "standard", "standard", "student",
    "student", "student", "kid", "kid", "kid", "Finish"]
)
