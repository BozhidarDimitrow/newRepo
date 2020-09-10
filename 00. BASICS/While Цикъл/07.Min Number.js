function source(array) {

    let i = 0;
    let smallest = Number(array[0]);

    while(array[i] !== "Stop") {
        
        if (smallest > Number(array[i])) {
            smallest = Number(array[i])
        }
       
        i++
    } 

    console.log(smallest);
}

source(["-10",
"20",
"-30",
"Stop"])