function sortNums(array) {    

    for (let i = 0; i < array.length; i++){        
        for (let j = i+1; j > 0; j--) {            
            let a = Number(array[j-1])
            let b = Number(array[j])
            if (b < a) {
                array[j-1] = b;
                array[j] = a;                
            } 
        }
    }
    array[0] = Number(array[0])
    console.log(array)
}
sortNums(["1", "489", "20", "5", "3", "11", "6"])