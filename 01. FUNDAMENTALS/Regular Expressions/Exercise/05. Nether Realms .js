function solve(input) {
    let patternHealth = /[^+\-*/.0-9' ]/
    let addDamagePattern = /[^\-.\d][+]*(?<adddamge>[\d.]+)/g
    let removeDamagePattern = /[-][\d.]+/g
    let spacePattern = /\s+/g

    input.forEach(element => {
        element = element.replace(spacePattern, "")
    });

    let sorted = input.sort((a, b) => a.localeCompare(b))
    let demonArray = []
    let demonName
    for (let i = 0; i < sorted.length; i++) {
        let demonList = input[i].split(",")
        demonList.sort((a, b) => a.localeCompare(b))
        demonList = demonList.map(element => element.replace(spacePattern, ""));

        for (let j = 0; j < demonList.length; j++) {
            demonName = demonList[j];

            let health = 0;
            let damage = 0;
            let umnojenie = 0;
            let delenie = 0;
            for (let k = 0; k < demonName.length; k++) {
                let currentSymbol = demonName[k];
                if (currentSymbol.match(patternHealth)) {
                    health += currentSymbol.charCodeAt()
                }
            }
            if (demonName.match(addDamagePattern)) {
                let item = demonName.match(addDamagePattern)

                item.forEach(element => {
                    let add = element.substring(1)
                    damage += Number(add);
                });

            }
            if (demonName.match(removeDamagePattern)) {
                let item = demonName.match(removeDamagePattern)
                item.forEach(element => {
                    damage += Number(element);
                });
            }
            for (let k = 0; k < demonName.length; k++) {
                let currentSymbol = demonName[k];
                if (currentSymbol === "*") {
                    damage = damage * 2
                }
                if (currentSymbol === "/") {
                    damage = damage / 2
                }
            }



            demonArray.push(demonName, health, damage)
        }


    }


    for (let i = 0; i < demonArray.length; i += 3) {
        let name = demonArray[i];
        let health = demonArray[i + 1];
        let damage = demonArray[i + 2];
        console.log(`${name} - ${health} health, ${(damage).toFixed(2)} damage`);
    }



}
solve([`M3ph 1st0**, Azazel`])