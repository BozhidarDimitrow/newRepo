function solve(array) {

    let combinations = 0;
    let i = 0;
    let j = 0;
    let k = 0;

    for (i = 0; i <= Number(array[0]); i++) {
        for (j = 0; j <= Number(array[0]); j++) {
            for (k = 0; k <= Number(array[0]); k++){
                if ((i + j + k) == Number(array[0])) {
                    combinations++
                }
                
            }
            
        }
        
    }
  console.log(combinations)
}

solve(["25"])