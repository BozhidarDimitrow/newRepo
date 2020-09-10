function solve(words, text) {
    
    
    let word = words.split(", ")
        for (let j = 0; j < word.length; j++) {
        let searchedWord = word[j];
        let token = text.split(" ");
    for (let i = 0; i < token.length; i++) {
        let checked = token[i]
        if (checked.includes("*") && checked.length === searchedWord.length) {
            text = text.replace(checked, searchedWord)
        }
    }
    };
    console.log(text);

}
solve('great, learning',
'softuni is ***** place for ******** new programming languages')