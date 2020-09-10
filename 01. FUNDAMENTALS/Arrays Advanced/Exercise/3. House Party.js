function solve(array) {

    let partList = []

    for (let i = 0; i < array.length; i++) {
        let shiHodi = false
        let [name, is, going]
            = array[i].split(` `)
        switch (going) {
            case "going!":
                partList.push(name)
                shiHodi = true
                break;
            case "not":
                break;
        }




        for (let j = i + 1; j < array.length; j++) {
            let [name1, is, going1,]
                = array[j].split(` `)
            if (name1 === name && shiHodi) {
                switch (going1) {
                    case "going!":
                        console.log(`${name} is already in the list!`);
                        break;
                    case "not":
                        removeFromParty(i)
                        shiHodi = false
                        break;
                }
                removeArray(j)
                j--

            } else if (name1 === name && !shiHodi) {
                switch (going1) {
                    case "going!":
                        partList.push(name) 
                    shiHodi = true
                        break;
                    case "not":
                        removeFromParty(i)
                        shiHodi = false
                        break;
                }
                removeArray(j)
                j--
            }
        }
        if (!shiHodi) {
            console.log(`${name} is not in the list!`);

        }
    }



    function removeArray(index) {
        array.splice(index, 1);
    }
    function removeFromParty(index) {
        partList.splice(index, 1);
    }

    // for (let element of partList){
    //     console.log(element)
    // }

    partList.map(x => console.log(x))


}

solve(['Allie is not going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])