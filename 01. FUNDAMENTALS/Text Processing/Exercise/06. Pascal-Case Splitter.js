function solve(input) {
let wordsArray = [];

    for (let i = 0; i < input.length; i++){
        let current = input.charAt(i)
        let currentWord = current
            if ( current === current.toUpperCase()){
                for (j = i+1; j < input.length; j++){
                   let  nextChar = input.charAt(j);
                   if(nextChar === nextChar.toLowerCase()){
                    currentWord += nextChar 
                   } else {
                       break;
                   }

                }
                wordsArray.push(currentWord)

            }
    }

    console.log(wordsArray.join(", "));

}

solve('ThisIsSoAnnoyingToDo')