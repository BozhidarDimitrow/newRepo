function onTime(hExam, minExam, hArr, minArr) {

    hExam = Number(hExam);
    minExam = Number(minExam);
    hArr = Number(hArr);
    minArr = Number(minArr);

    let hDiff = (hExam - hArr);
    let minDiff = (minExam - minArr);

    if (hDiff == 0 && minDiff == 0) {
        console.log("On time");
    }
    if (hDiff == 0 && minDiff < 30 && minDiff > 0) {
        console.log("On time");
        console.log(`${minDiff} minutes before the start`)
    }
    if (hDiff == 0 && minDiff > 30) {
        console.log("Early");
        console.log(`${minDiff} minutes before the start`)
    }
    if (hDiff == 0 && minDiff < 0) {
        console.log("Late");
        console.log(`${(minDiff) * -1} minutes after the start`)
    }



    if (hDiff == 1) {
        if (hDiff == 1 && minDiff <= -30) {
            console.log("On time");
            console.log(`${minDiff + 60} minutes before the start`)
        }
        if (hDiff == 1 && minDiff > -30 && (minDiff + 60) < 60) {
            console.log("Early");
            console.log(`${minDiff + 60} minutes before the start`);
        }
    }

    if ((hDiff >= 1) && (minDiff == 0)) {
        console.log("Early");
        console.log(`${(hDiff)}:00 hours before the start`);
    }
    if ((hDiff < 0) && (minDiff == 0)) {
        console.log("Late");
        console.log(`${(hDiff) * -1}:00 hours after the start`);
    }

    if ((hDiff > 1) && (minDiff != 0)) {
        if (minDiff < 10) {
            console.log("Early");
            console.log(`${(hDiff)}:0${(minDiff)} hours before the start`);
        } else {
            console.log("Early");
            console.log(`${(hDiff)}:${(minDiff)} hours before the start`);
        }
    }



    if (hDiff < 0) {
        if (hDiff < 0 && minDiff <= -30) {
            if (Math.log(minDiff) < 10) {
                console.log("Late");
                console.log(`${(hDiff) * -1}:0${minDiff + 60} hours after the start`)
            } else {
                console.log("Late");
                console.log(`${(hDiff) * -1}:${minDiff + 60} hours after the start`)
            }
        } else if (hDiff < 0 && minDiff > -30 && ((minDiff + 60) < 60)) {
            if ((minDiff + 60) < 10) {
                console.log("Late");
                console.log(`${(hDiff) * -1}:0${minDiff + 60} hours after the start`);
            } else {
                console.log("Late");
                console.log(`${(hDiff) * -1}:${minDiff + 60} hours after the start`);
            }
        }
        if ((hDiff < 0) && (minDiff > -30) && (Math.log(minDiff) < 60) && minDiff != 0) {
            console.log("Late");
            console.log(`${60 - (minDiff)} minutes after the start`);
        }
    }
}

onTime("11",
    "30",
    "8",
    "12")