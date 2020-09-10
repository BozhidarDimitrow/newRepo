function solve(array) {
    
    function add(a,b) {
        return a+b;
    }

    let num1 = Number(array.slice(0,1));
    let num2 = Number(array.slice(array.length-1))
    console.log(add(num1,num2));
}
solve(['20', '30', '40'])