function solve(word, text){

    let checkedText = text.toLowerCase();
    if (checkedText.includes(` ${word} `) || checkedText.includes(`${word} `) || checkedText.includes(` ${word}`)){
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
solve('javascript',
'JavaScript is the best programming language')