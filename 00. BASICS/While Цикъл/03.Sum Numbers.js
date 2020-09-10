function source(array) {

    let num1 = Number(array[0]);
    let i = 1
    let sum = 0;


    while (i < array.length) {
        
        sum = sum + Number(array[i]);
        if (sum >= num1) {
            
            break;
        }
        i++
    }
    console.log(sum);
}


source(["20",
"1",
"2",
"3",
"4",
"5",
"6",
"15"])