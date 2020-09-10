function solve(input) {

    let supply = input[0];
    let pattern = /[#](?<food>[A-Za-z ]+)[#](?<date>[0-9][0-9][\/][0-9][0-9][\/][0-9][0-9])[#](?<calories>[0-9]+)[#]|[|](?<food1>[A-Za-z ]+)[|](?<date1>[0-9][0-9][\/][0-9][0-9][\/][0-9][0-9])[|](?<calories1>[0-9]+)[|]/
    let sumCalories = 0;
    let supplyArray = []
    while (supply.match(pattern)) {
        let item = supply.match(pattern);
        let food = item.groups["food"];
        let food1 = item.groups["food1"];
        let date = item.groups["date"];
        let date1 = item.groups["date1"];
        let calories = Number(item.groups["calories"]);
        let calories1 = Number(item.groups["calories1"]);
        if (food !== undefined) {
            sumCalories += calories
            supplyArray.push(food, date, calories)
            // console.log(`Item: ${food}, Best before: ${date}, Nutrition: ${calories}`);
        } else {
            sumCalories += calories1
            supplyArray.push(food1, date1, calories1);
            // console.log(`Item: ${food1}, Best before: ${date1}, Nutrition: ${calories1}`);
        }
        supply = supply.replace(pattern, "")
    }
    let days = sumCalories / 2000;

    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    for (let i = 0; i < supplyArray.length; i += 3) {
        let food = supplyArray[i];
        let date = supplyArray[i + 1];
        let calories = supplyArray[i + 2];
        console.log(`Item: ${food}, Best before: ${date}, Nutrition: ${calories}`);
    }
}
solve([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
])