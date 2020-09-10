function leap(leapYear, endYear) {
    leapYear = Number(leapYear);
    endYear = Number(endYear);

    for (let i = leapYear; i <= endYear; i = i + 4) {

        console.log(i)
    }
}
leap("2000",
"2011")