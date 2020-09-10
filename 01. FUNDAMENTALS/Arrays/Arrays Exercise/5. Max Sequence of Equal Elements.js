function solve(array) {
let newArray = []

    for (let i = 0; i < array.length; i++) {
        let sequence = 0;
        for (j = 0; j < array.length; j++) {
            let num = Number(array[j]);
            if (num === Number(array[j + 1])) {
                sequence += 1;
                newArray.push(num);
                newArray.push(Number(array[j+1]))
            } 
            

        }
    }
console.log(newArray.join(" "))
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])