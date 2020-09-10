function solve(input) {

    for(let i = 0; i < input.length; i++){
        let checkedChar = input.charAt(i)
        if (input.charAt(i) === input.charAt(i+1)){
           let inputFirst = input.substring(0,i);
            let inputLast = input.substring(i+1)
            input = inputFirst.concat(inputLast)
            i--
        }
    }
console.log(input);
}
solve('qqqwerqwecccwd')