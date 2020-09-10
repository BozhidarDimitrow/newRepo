function run(num1, num2, num3) {

    num1 = Number(num1)
    num2 = Number(num2)
    num3 = Number(num3)

    let totalTime = num1 + num2 + num3

    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60 

    if (seconds < 10) {
        console.log (`${minutes}:0${seconds}`);
    } else {
        console.log (`${minutes}:${seconds}`)
    }
}

run ("14", "12", "10")