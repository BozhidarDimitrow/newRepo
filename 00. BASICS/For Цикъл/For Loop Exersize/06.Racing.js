function racing(litters, consumption, laps) {
    litters = Number(litters);
    consumption = Number(consumption);
    laps = Number(laps);
let lapsleft = laps
let littersLeft = litters;
    for (let i = 1; i <= laps; i = i + 1){
        
        consumption =  consumption - 0.1        
        littersLeft = littersLeft - consumption
        
        if (littersLeft >0) {
            console.log("Congrats! You won the race!")
        } else {
            console.log(`You are out of fuel in round ${lapsleft}!`)
        }
    }

    
}
racing("50", "4.3", "30")