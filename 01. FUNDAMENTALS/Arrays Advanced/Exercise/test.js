// function shift(positions) {
//     let array1 = [1, 2, 3, 5, 9, 8, 7, 6, 5 ]
   
//     for (let i = positions; i < array1.length; i++) {
//         array1.splice((i - positions), 0, array1[i])
//         array1.splice((i+1), 1)
//     }
    


// function shift(positions) {
//     let array1 = [1, 2, 3, 5, 9, 8, 7, 6, 5 ]
//     for (let i = positions; i < array1.length; i++) {
//         array1.splice((i - positions), 0, array1[i])
//         array1.splice((i+1), 1)
//     }
// return array1

// }
// shift(1)


// console.log (shift(1))





// function sumPairs(array1) {
//     let newArray = [];
//     for (let i = 0; i < array1.length; i += 2) {
//         let sum = 0;
//         sum = (Number(array1[i]) + Number(array1[i + 1]));
//         if (Number.isNaN()) {
//             sum = Number(array1[i])
//         }
//         newArray.push(sum)
//     }
//     array1 = newArray
//     console.log(array1)
// }
// sumPairs([2, 2, 4, 2, 4])



// function trash(item) {
//     let inventori = ['SWORD Shield Spear', `Bag`]
//     let exist = false
//     for (let i = 0; i < inventori.length; i++) {
//         let item = inventori.slice(i)
//         if (inventori[i] === item) {
//             exist;
//             inventori.splice(i, 1)
//         }
//     }
//     console.log (inventori)
// }
// trash("Shield")

// function repair(item) {
//     let inventori = ["SWORD", "Shield", "Spear","bag"]
//     for (let i = 0; i < inventori.length; i++) {
//         if (inventori[i] === item) {            
//             inventori.splice(i,1);
//             inventori.push(item);
//         }
//     }

//     console.log(inventori)
// }


// repair("Spear")


// function trash(item) {
//     let inventori = ["SWORD", "Shield", "Spear","bag"]
//     let exist = false
//     for (let i = 0; i < inventori.length; i++) {
//         let item = inventori.slice(i)
//         if (inventori[i] === item) {
//             exist;
//             inventori.splice(i, 1)
//         }
//     }
//     console.log(inventori)
// }

// trash("Shield")

// function upgrade(item) {
//     let inventori = ["SWORD", "Shield", "Spear","bag"]
//    let upgradeditem = item.split(" ")
//     for (let i = 0; i < inventori.length; i++) {
//         if (inventori[i] === upgradeditem[0]) {
//             exist;
//             inventori.splice((i, 1, `${item}:${upgrade}`));
//             inventori.push(item);
//         }
//     }
//     console.log(inventori)
// }
// upgrade("SWORD-Steel")

function upgrade(item) {
    let inventori = ["SWORD", "Shield", "Spear","bag"]
    for (let i = 0; i < inventori.length; i++) {
        let upgradet = item.split("-")
        if (inventori[i] === upgradet[0]) {
            inventori.splice(i+1, 0, `${upgradet[0]}:${upgradet[1]}`);
            
        }
    }
    console.log(inventori)
}
upgrade("SWORD-Steel")