function solve(array1, array2) {
    let output = []

    for (i = 0; i < array1.length; i++) {
        let a = Number(array1[i]);
        let b = Number(array2[i]);
        if (i % 2 === 0) {
            output.push(a + b);
        } else {
            output.push(String(array1[i]) + String(array2[i]));            
        }      
    }

    console.log(output.join(" - "))
}


solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', "44"])