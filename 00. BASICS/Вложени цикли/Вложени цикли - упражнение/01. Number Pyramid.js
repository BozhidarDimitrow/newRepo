function solve(array) {
    let lastNum = Number(array[0]);
let current = 1;
let isBigger = false;
let printCurrentLine ="";


    for (let rows = 1; rows <= lastNum; rows++) {

        for(let cols = 1; cols <= rows; cols++){
            if (current > lastNum) {
                isBigger = true;
                break;
            }
            printCurrentLine += current+" ";
            current++
        }
    
        console.log(printCurrentLine);
        printCurrentLine ="";
        if (isBigger){
            break;
        }
    }
    
}
solve(["12"])