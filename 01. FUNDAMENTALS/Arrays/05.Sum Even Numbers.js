function solve(array) {
    let sbor = 0;

    
    for(let i = 0; i <array.length; i++)
    array[i] = Number(array[i])
    for (let currentNum of array) {
        
        if (currentNum % 2 === 0) {
            sbor += currentNum
        }


    }
    console.log(sbor)

}

solve(['2','4','6','8','10'])