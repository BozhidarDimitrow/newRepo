function solve(array) {

    let concreate = 195;
    let pesos = 0;
    let dayly = []
    array.sort((a, b) => a - b)
    
    for (let i = 0; i < array.length; i++) {
        novaBrigada = 0
        
        for (let j = Number(array[i])+1; j <= 30; j++) {
            pesos += (195 * 1900);
            dayly.splice(novaBrigada, 1, concreate);            
            novaBrigada++
        }
       
        concreate += 195
    }

    console.log(dayly.join(", "))
    console.log(`${pesos} pesos`)

}
solve([17, 22, 17, 19, 17])