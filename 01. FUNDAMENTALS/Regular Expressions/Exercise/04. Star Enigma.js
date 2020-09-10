function solve(input) {

    let numMessages = Number(input[0]);
    let pattern = /[@](?<name>[A-Za-z]+)?[^@\-!:>]*[:](?<population>[0-9]+)?[^@\-!:>]*[!](?<attack>[AD])[!]?[^@\-!:>]*[-][>](?<soldierscount>[0-9]+)/
    let attackedArray = [];
    let destroyedArray = [];

    for (let i = 1; i < input.length; i++) {
        let newCode = ""
        let currentMessage = input[i]
        let keyCount = 0
        for (let i = 0; i < currentMessage.length; i++) {
            let currentSymbol = currentMessage[i].toLowerCase()
            if (currentSymbol === "s" || currentSymbol === "t" || currentSymbol === "a" || currentSymbol === "r") {
                keyCount++
            }
        }
        for (let i = 0; i < currentMessage.length; i++) {
            let currentSymbolAsciiCode = currentMessage.charCodeAt(i)
            let newSymbolCode = currentSymbolAsciiCode - keyCount;
            newCode += String.fromCharCode(newSymbolCode)

        }
        if (newCode.match(pattern)) {
            let item = newCode.match(pattern);
            let planet = item.groups["name"];

            let attack = item.groups["attack"];

            if (attack === "A") {
                attackedArray.push(planet)
            } else {
                destroyedArray.push(planet)
            }
        }
    }
    attackedArray.sort((a, b) => a.localeCompare(b))
    destroyedArray.sort((a, b) => a.localeCompare(b))
    console.log(`Attacked planets: ${attackedArray.length}`);
    if (attackedArray.length > 0) {
        console.log(`-> ${attackedArray.join("\n-> ")}`);
    }
    console.log(`Destroyed planets: ${destroyedArray.length}`);
    if (destroyedArray.length > 0) {
        console.log(`-> ${destroyedArray.join("\n-> ")}`);
    }


}
solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]
)


//     `We receive two messages, to decrypt them we calculate the key:
// First message has decryption key 3. So we substract from each characters code 3.
// PQ@Alderaa1:30000!A!->20000
// The second message has key 5.
// @Cantonica:3000!D!->4000NM
// Both messages are valid and they contain planet, population, attack type and soldiers count. 
// After decrypting all messages we print each planet according the format given.`

//     `We receive three messages.
// Message one is decrypted with key 4:
// pp$##@Coruscant:2000000000!D!->5000
// Message two is decrypted with key 7:
// @Jakku:200000!A!MMMM
// This is invalid message, missing soldier count, so we continue.
// The third message has key 5.
// @Cantonica:3000!D!->4000NM`