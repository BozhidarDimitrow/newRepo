function solve(input){

    let result = "<table>\n"

    for (let i = 0; i < input.length; i++){
        let token = JSON.parse(input[i]);
        result += "<tr>\n"
        result += `<td>${token["name"]}</td>\n`
        result += `<td>${token["position"]}</td>\n`
        result += `<td>${token["salary"]}</td>\n`
        result += "</tr>\n"
        
    }
    result = result + "</table>"
console.log(result);

}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])




