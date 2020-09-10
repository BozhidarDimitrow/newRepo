function solve(array) {

    let sorted = array.sort((a,b) => a - b);
        

    console.log(sorted.slice(0,2)
    .join(" "))
    
}
solve([3, 0, 10, 4, 7, 3])