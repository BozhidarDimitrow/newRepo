function solve(array) {
    let i = 0
    let j = 0
    let k = 0
    let etaji = Number(array[0]);
    let broi = Number(array[1]);
let output = ""
let output1 = ""
    while (i < broi) {
        output1 += String(`L${etaji}${i} `)
        i++
    }
console.log(output1);
    while ((etaji - 1) > 0) {
output = ""
     if ((etaji - 1) % 2 === 0) {
        j = 0;
        while (j < broi) {
            output += String(`O${etaji - 1}${j} `)            
            j++
        }        
    } else {
        k = 0;
        while (k < broi) {
            output += String(`A${etaji - 1}${k} `)
            k++
        }        
    }
    console.log(output)    
    etaji--      
}
}
solve(["4", "4"])