function solve(array) {

    // let array = input.split(" ")
    let password = array[0]

    for (let i = 1; i < array.length; i++) {
        let token = array[i].split(" ")
        let command = token[0]

        if (command === "TakeOdd") {
            let passwordOdd = ""
            for (let i = 1; i < password.length; i += 2) {
                passwordOdd += password.charAt(i)
            }
            password = passwordOdd;
            console.log(password);
        }
        if (command === "Cut") {
            let index = Number(token[1]);
            let length = Number(token[2]);
            let result = password.substring(index + length)
            let result2 = password.substring(0, index)
            password = result2.concat(result)
            console.log(password);

        }
        if (command === "Substitute") {
            let old;
            let text = token[1];
            let newText = token[2];
            if (!password.includes(text)) {
                console.log(`Nothing to replace!`);
            } else {
                while (old !== password) {
                    old = password;
                    password = password.replace(text, newText)

                }
                console.log(password);
            }

        }
    }

    console.log(`Your password is: ${password}`);

}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ])