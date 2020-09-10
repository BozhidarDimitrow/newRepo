function solve(input) {

    let message = input[0];

    for (let i = 1; i < input.length; i++) {
        let token = input[i].split("|");
        let command = token[0];
        let firstEl = token[1];
        let secondEl = token[2];

        if (command === "Decode") {
            // let finalMessage = ""
            // for (let j = message.length-1; j>=0; j--){
            //     finalMessage += message[j]
            // }
            console.log(`The decrypted message is: ${message}`);
            break;
        } else if (command === "Move") {
            let n = Number(firstEl);
            let firstHalf = message.substring(0, n);
            let secondHalf = message.substring(n);
            message = secondHalf + firstHalf;
        } else if (command === "Insert") {
            let n = Number(firstEl);
            let firstHalf = message.substring(0, n);
            let secondHalf = message.substring(n);
            message = firstHalf + secondEl + secondHalf;

        } else if (command === "ChangeAll") {
            while(message.includes(firstEl)){
                message = message.replace(firstEl,secondEl)
            }
            // if (message.includes(firstEl)) {
            //     const searchRegExp = new RegExp(firstEl, `g`)
            //     message = message.replace(searchRegExp, secondEl)
            // }
        }
    }

}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])