function rotation(array) {
    let printLine = [];
    let printLineNew = [];
    let pyrviMasiv = [...array[0]];
    let i = 0;    
        
       

        for (let k = 0; k < pyrviMasiv.length; k++) {
            let j = 0
            while (j < array.length) {
                 let nextMasiv = array[j]
                printLine.push(nextMasiv[k])

                j++
            }
            nextMasiv = 0
            printLineNew.push(printLine);
            printLine = []

        }

    
    console.log(printLineNew[0])
    console.log(printLineNew[1])
    console.log(printLineNew[2])
    console.log(printLineNew[3])
    console.log(printLineNew[4])
}

rotation([[1, 5, 6, 11, 20],
[20, 11, 40, 9, 81],
[7, 21, 16, 9, 2]])


//Number(textNum1.charAt(j))