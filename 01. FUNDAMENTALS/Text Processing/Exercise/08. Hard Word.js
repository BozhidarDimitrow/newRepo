function solve(array) {

    let letter = array.shift();
    let words = array.pop()


    for (let i = 0; i < letter.length; i++){
        let currentChar = letter.charAt(i);
        let count = 0;
        if(currentChar === "_"){
            for(let j = i; j < letter.length; j++){
                currentChar = letter.charAt(j)
                if (currentChar === "_"){
                    count++
                }else {
                    break;
                }

            }  
            for (let k = 0; k < words.length; k++){
                let keyWord = words[k];
                if(keyWord.length === count){
                    let firstPart = letter.substring(0,i)
                    let secondHalf = letter.substring(i+count);
                    letter = firstPart + keyWord + secondHalf
                }
            }
        } 
        

    }
    


    console.log(letter);
    
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)