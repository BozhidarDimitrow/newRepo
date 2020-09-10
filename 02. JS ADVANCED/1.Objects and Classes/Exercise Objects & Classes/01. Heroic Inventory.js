function solve(input) {

    let heroesArray = []

    let currentObj = {}
    for (let i = 0; i < input.length; i++) {
        let items = []
        let token = input[i].split(" / ");
        let name = token[0];
        let level = Number(token[1]);
        if (token[2] !== undefined) {
            let inventory = token[2].split(", ");
            for (let j = 0; j < inventory.length; j++) {
                let currentInvent = inventory[j];
                items.push(currentInvent)
            }
        }
        currentObj = { name, level, items };
        heroesArray.push(currentObj);
    }
    console.log(JSON.stringify(heroesArray));


}
solve(['Isacc / 25 ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])