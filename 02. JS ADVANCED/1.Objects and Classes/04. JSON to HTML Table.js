function solve(input) {
    input = JSON.parse(input)

    let pattern1 = /[&]/
    let pattern2 = /["]/
    let pattern3 = /[`]/
    let pattern4 = /[<]/
    let pattern5 = /[>]/
    keyArray = []
    valueArray = []

    for (let i = 0; i < input.length; i++) {
        let currObj = input[i]
        keyArray = Object.keys(currObj)
        for (const key in currObj) {
            valueArray.push(currObj[key])
        }
    }

    for (let i = 0; i < keyArray.length; i++) {

        if (isNaN(Number(keyArray[i]))) {
            keyArray[i] = keyArray[i].replace(pattern1, "&amp;")
                .replace(pattern2, "&quot;")
                .replace(pattern3, "&#39;")
                .replace(pattern4, "&lt;")
                .replace(pattern5, "&gt;")

        }
    }
    for (let i = 0; i < valueArray.length; i++) {

        if (isNaN(Number(valueArray[i]))) {

            valueArray[i] = valueArray[i].replace(pattern1, "&amp;")
                .replace(pattern2, "&quot;")
                .replace(pattern3, "&#39;")
                .replace(pattern4, "&lt;")
                .replace(pattern5, "&gt;")
        }
    }
let returnString = `<table>\n<tr><th>${keyArray.join("</th><th>")}</th></tr>\n`
    // console.log(`<table>`);
    // console.log(`<tr><th>${keyArray.join("</th><th>")}</th></tr>`);
    
    for (let i = 0; i < valueArray.length; i+= keyArray.length){
        let currentArr = []
        returnString += `<tr>`
        for(let j = 0; j < keyArray.length; j++){
            returnString += `<td>${valueArray[i+j]}</td>`
        }
        returnString +=`</tr>\n`
    }

    return returnString + `</table>`

    // console.log(valueArray);
    // console.log(keyObject);

}
// let result =solve([{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}])
let result = solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])
console.log(result);