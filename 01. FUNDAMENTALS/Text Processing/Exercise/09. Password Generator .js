function solve(array) {

    let text = array[0].concat(array[1]);
    let thirdWord = array[2];


    function isVowel(char) {
        if (char.length == 1) {
            var vowels = "aeiou";
            var isVowel = vowels.indexOf(char) >= 0 ? true : false;

            return isVowel;
        }
    }

    let numOfThirdWord = 0

    for (let i = 0; i < text.length; i++) {
        let currentChar = text.charAt(i);
        if(numOfThirdWord === thirdWord.length){
            numOfThirdWord = 0
        }
        if (isVowel(currentChar)) {
           let firstHalf = text.substring(0,i)
           let secondHalf = text.substring(i+1) 
           let newLetter =  thirdWord.charAt(numOfThirdWord).toUpperCase()      
            text =  firstHalf + newLetter + secondHalf;
            numOfThirdWord++
        }

    }


    let finalPassword = ""
    
    for (let i = text.length; i >= 0; i--){
        let currentFinalChar = text.charAt(i)
        finalPassword += currentFinalChar 
    }
    

        console.log(`Your generated password is ${finalPassword}`);
        
}
solve([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]
    )