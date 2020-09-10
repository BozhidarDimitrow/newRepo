function solve(array){

    for(let i = 0; i < array.length; i++){
        let num1 = Number(array[i]);
        for (let j = i+1; j < array.length; j++){
            let num2 = Number(array[j]);
            if (num1 === num2){
                remove(j);
                j--
            }
        }
    }

function remove(index){
    array.splice(index, 1);
}

console.log(array.join(" "))
}

solve([7, 8, 9, 7, 7, 2, 3, 4, 1, 2])