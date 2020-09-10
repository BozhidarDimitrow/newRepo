function solve(dates) {

    let pattern = /\b(?<day>\d{2})([-./])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    while ((validdate = pattern.exec(dates)) !== null) {
        let day = validdate.groups["day"];
        let month = validdate.groups["month"];
        let year = validdate.groups["year"];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"
)