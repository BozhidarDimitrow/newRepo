function solve(input) {

let sum = 0
    let current = input.split(" ")
    for (let i = 0; i < current.length; i++) {
        if (current[i] !== "") {
            let firstLettter = current[i][0];
            let firstLettterNum  
            let lastLetter = current[i][current[i].length - 1]
            let lastLetterNum
            let currentNum = Number(current[i].slice(1,current[i].length-1))
               if (firstLettter === firstLettter.toUpperCase()){
                firstLettterNum = firstLettter.charCodeAt() - 64
                currentNum = currentNum / firstLettterNum;
               } else {
                firstLettterNum = firstLettter.charCodeAt() - 96
                currentNum = currentNum * firstLettterNum;
               }
               if (lastLetter === lastLetter.toUpperCase()){
                lastLetterNum = lastLetter.charCodeAt() - 64;
                currentNum = currentNum - lastLetterNum;
               } else {
                   lastLetterNum = lastLetter.charCodeAt() - 96;
                   currentNum = currentNum + lastLetterNum
               }
               sum += currentNum        
            
            
            // console.log(currentNum);
        }
    }

    console.log(sum.toFixed(2));

}
solve('A12b s17G')