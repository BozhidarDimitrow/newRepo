function solve(array) {

    let num = Number(array[0]);
    let num2 = Number(array[1]);

    let sum = 0;
    
        for (let i = 0; i <= array.length; i++) {
            if (array.length < 2) {
                console.log(array[0])
                break;
            }
            for (j = 0; j < array.length; j++) {
                sum = 0;
                num = Number(array[j]);
                num2 = Number(array[j + 1]);
                if ((j + 2) > array.length) {
                    array.length = array.length - 1;
                    break;
                }
                sum += (num + num2);
                array[j] = sum;
            }
            
            i = 0;
        }
    
}

solve([2,10,3])