function solve(num1, num2) {
    let n = Number(num1);
    let k = Number(num2);
    let sum = 0;
    let array = [1];

    for (let i = 1; i < n; i++) {
        i = array.length - 1 
        let sum = 0;      
        for (let j = 0; j < k; j++) {
            if(i-j >= 0){
            sum += Number(array[i-j]);            
            }
            if ((array.length) == n) {
                break;
            }
        } 
        array.push(sum)               
        if ((array.length) == n) {
            break;
        }        
    }






    console.log(array.join(" "))
}
solve(6, 3)