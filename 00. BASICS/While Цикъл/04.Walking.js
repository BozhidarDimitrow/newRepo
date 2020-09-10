function solve(array) {
    let goal = 10000;
    let i = 0;
    let steps = 0
    while (i < array.length) {
        if (Number.isNaN(Number(array[i]))) {

        } else {
        steps = steps + Number(array[i]);
        }
        i++
    }
    if (steps >= goal) {
    console.log(`Goal reached! Good job!`)
    console.log(`${steps - goal} steps over the goal!`)
    } else {
        console.log(`${goal - steps} more steps to reach goal.`)
    }
}
solve(["125",
"250",
"4000",
"30",
"2678",
"4682"])