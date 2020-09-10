function solve(array) {

    let dictionaryArray = [];
    let obj = {}
    // array.forEach(element => {
    //     let position = JSON.parse(element)
    //     ime = [Object.keys(String(position))]
    //     znacenie = Object.values(String(position))
    //     dictionaryArray.push(ime)
    // })


    array.forEach(element => {
        let position = JSON.parse(element)
        obj[Object.keys(position)] = Object.values(position)

    })

    let sorted = {}
    Object.keys(obj).sort().forEach(function(key) {
        sorted[key] = obj[key];
      });
    for (let kvp in sorted) {
console.log(`Term: ${kvp} => Definition: ${sorted[kvp]}`)
    }


   
}


// let dictionary = {}
// dictionaryArray.forEach(element => {
//     const tokens = element.split(": ");
//     const name = tokens[0];
//     const opisanie = tokens[1]
//     dictionary.name = name;
//     dictionary.opisanie = opisanie
// })




solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])