function solve(array) {
    let i = 3;
    let wide = Number(array[0]);
    let long = Number(array[1]);
    let high = Number(array[2]);
    let volumeRoom = wide * long * high;
    
    let kashoni = 0;
    while (array[i] !== "Done" && i < array.length) {
        kashoni += Number(array[i]);        
        i++
    }
    if (volumeRoom > kashoni) {
        console.log(`${volumeRoom - kashoni} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${kashoni - volumeRoom} Cubic meters more.`);
    }

}

solve(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122","30"])