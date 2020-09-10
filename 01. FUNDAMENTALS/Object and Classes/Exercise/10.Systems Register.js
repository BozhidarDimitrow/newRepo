function solve(array) {
    let objectArray = []
    array.sort((a, b) => a.localeCompare(b))
    let systemArray = []
    let bigSystemArray = []
    for (element of array) {
        token = element.split(" | ")
        let [system, component, subComponent] = [token[0], token[1], token[2]];
        systemArray.push(system, component, subComponent);
        bigSystemArray.push(systemArray);
        systemArray = []

    }

    for (let i = 0; i < bigSystemArray.length; i++) {
        if (i > 0) {
            let system = bigSystemArray[i][0];
            let component = bigSystemArray[i][1]
            let subComponent = bigSystemArray[i][2]
            if (system === bigSystemArray[i - 1][0]) {
                if (component === bigSystemArray[i - 1][1]) {
                    bigSystemArray[i - 1].push(subComponent);
                    bigSystemArray.splice([i], 1)
                    i--
                }
            }
        }
    }

    for (let i = 0; i < bigSystemArray.length; i++) {
        if (i > 0) {
            let system = bigSystemArray[i][0];
            if (system === bigSystemArray[i - 1][0]) {
                let checketSytem = bigSystemArray[i].slice(1)
                bigSystemArray[i - 1].push(0)
                for (j = 0; j < checketSytem.length; j++) {
                    bigSystemArray[i - 1].push(checketSytem[j])
                }
                bigSystemArray.splice(i, 1)
                i--
            }
        }
    }

    for (let i = 0; i < bigSystemArray.length; i++) {
        systemArray = bigSystemArray[i]
        for (let j = 0; j < systemArray; j++) {
            system = systemArray[0];
            if (systemArray[j] === 0) {
                component = systemArray[j+1]
                for (let k = j + 2; k < systemArray; k++) {
                    if(systemArray[k] === 0){
                        break;
                    }
                    system.component = systemArray[k];
                }
                finalArray.push({system})
            }
        }

    }



    console.log()



}
solve(["SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',])