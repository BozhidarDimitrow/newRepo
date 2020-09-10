function onTime(hExam, minExam, hArr, minArr) {

    hExam = Number(hExam);
    minExam = Number(minExam);
    hArr = Number(hArr);
    minArr = Number(minArr);

    let totalMinExam = hExam * 60 + minExam;
    let totalMinArr = hArr * 60 + minArr;
    let totalMinDiff = totalMinExam - totalMinArr;

    if (totalMinDiff === 0 || (totalMinDiff <= 30 && totalMinDiff > 0)) {
        console.log("On Time");
    }
    if (totalMinDiff > 30) {
        console.log("Early");
    }
    if (totalMinDiff < 0) {
        console.log("Late");
    }

    if ((totalMinDiff <= 30 && totalMinDiff > 0)) {
        console.log(`${totalMinDiff} minutes before the start.`);
    }
    if (totalMinDiff > 30) {
        if (totalMinDiff >= 60) {
            if ((totalMinDiff % 60) < 10) {
                console.log(`${Math.floor(totalMinDiff / 60)}:0${(totalMinDiff % 60)} hours before the start`);
            } else {
                console.log(`${Math.floor(totalMinDiff / 60)}:${(totalMinDiff % 60)} hours before the start`);
            }
        } else {
            console.log(`${totalMinDiff} minutes before the start`)
        }
    }
    if (totalMinDiff < 0) { 
        if (totalMinDiff <= -60) {
            if (Math.abs(totalMinDiff % 60) < 10) {
                console.log(`${Math.abs(Math.floor(Math.abs(totalMinDiff) / 60))}:0${Math.abs(totalMinDiff % 60)} hours after the start`);
            } else {
                console.log(`${(Math.floor(Math.abs(totalMinDiff) / 60))}:${Math.abs(totalMinDiff % 60)} hours after the start`);
            }
        } else {
            console.log(`${(totalMinDiff) * -1} minutes after the start`)
        }
    }
}

onTime("9",
"00",
"10",
"30")