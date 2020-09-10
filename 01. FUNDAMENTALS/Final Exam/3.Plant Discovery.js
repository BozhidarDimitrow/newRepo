function solve(input) {

    let numEntries = Number(input[0]);
    let plants = input.slice(1, numEntries + 1);
    let objArray = []



    plants.forEach(element => {
        let token = element.split("<->")
        let plantName = token[0];
        let plantRarity = Number(token[1]);
        let rating = []
        let currrentPlant = { plantName, plantRarity, rating };
        objArray.push(currrentPlant);
    });

    for (let i = numEntries + 1; i < input.length; i++) {
        isFound = false
        let token = input[i].split(":")
        let command = token[0]
        if (command === "Exhibition") {
            break;
        } else if (command === "Update") {
            let newToken = token[1].split("-")
            let searchedFlower = newToken[0].trim();
            let newRarity = Number(newToken[1].trim());
            
            objArray.forEach(element => {
                if (element.plantName === searchedFlower) {
                    element.plantRarity = newRarity;
                    isFound = true
                }
            })
        } else if (command === "Rate") {
            let newToken = token[1].split("-");
            let searchedFlower = newToken[0].trim();
            let newRating = Number(newToken[1].trim());
            objArray.forEach(element => {
                if (element.plantName === searchedFlower) {
                    element.rating.push(newRating)
                    isFound = true;
                }
            })
        } else if (command === "Reset") {
            let newToken = token[1].split("-");
            let searchedFlower = newToken[0].trim();
            objArray.forEach(element => {
                if (element.plantName === searchedFlower) {
                    element.rating = []
                    isFound = true;
                }
            })
        } else {
            console.log(`error`);
        }
        if (!isFound){
            console.log(`error`);
        }
    }

    objArray.forEach(element => {
        if (element.rating.length === 0) {
            element.rating = 0.00
        } else {
            element.rating = Number(element.rating.reduce(function (a, b) {
                return a + b;
            }, 0)) / element.rating.length.toFixed(2)
        }
    });

    function compareRarity(a, b) {
        if (a.plantRarity > b.plantRarity) {
            return -1;
        }
        if (a.plantRarity < b.plantRarity) {
            return 1;
        }
        if (a.plantRarity = b.plantRarity) {
            if (a.rating > b.rating) {
                return -1;
            }
            if (a.rating < b.rating) {
                return 1;
            }
            return 0;
        }
    }


    // function compareRating(a, b) {
    //     if (a.rating > b.rating) {
    //         return -1;
    //     }
    //     if (a.rating < b.rating) {
    //         return 1;
    //     }
    //     return 0;
    // }

    
    objArray.sort(compareRarity);

    console.log(`Plants for the exhibition:`);
   
    objArray.forEach(element => {
        console.log(`- ${element.plantName}; Rarity: ${element.plantRarity}; Rating: ${element.rating.toFixed(2)}`);
    })
}
solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
  ]
  
)