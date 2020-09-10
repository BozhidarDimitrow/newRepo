function solve(array) {

    let inventori = array.slice(0, 1)[0].split(" ")


    let commands = array.slice(1, array.length)

    for (let i = 1; i < array.length; i++) {
        let commands = array[i].split(" ")
        let command = commands.shift()
        let item = commands.shift()

        switch (command) {
            case "Buy":
                buy(item)
                break;
            case "Trash":
                trash(item);
                break;
            case "Repair":
                repair(item);
                break;
            case "Upgrade":
                upgrade(item);
                break;
        }
    }



    function buy(item) {
        let exist = false
        for (let i = 0; i < inventori.length; i++) {
            if (inventori[i] === item) {
                exist
            }
        }
        if (!exist) {
            inventori.push(item);
        }
        return inventori;
    }
    function trash(item) {
        let exist = false
        for (let i = 0; i < inventori.length; i++) {

            if (inventori[i] === item) {
                exist;
                inventori.splice(i, 1)
            }
        }
        return inventori;
    }
    function repair(item) {

        for (let i = 0; i < inventori.length; i++) {
            if (inventori[i] === item) {

                inventori.splice(i, 1);
                inventori.push(item);
            }
        }
    }
    function upgrade(item) {
        for (let i = 0; i < inventori.length; i++) {
            let upgradet = item.split("-")
            if (inventori[i] === upgradet[0]) {
                inventori.splice(i+1, 0, `${upgradet[0]}:${upgradet[1]}`);                
            }
        }
        return inventori
    }

    console.log(inventori.join(" "))
}
solve(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])