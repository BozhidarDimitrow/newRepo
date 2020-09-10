function solve(a, b) {
    let startingCode = a.charCodeAt(0);
    let endingCode = b.charCodeAt(0);
let newString = []
    if (startingCode < endingCode){
        for (let i = startingCode+1; i < endingCode; i++){
            newString.push(String.fromCharCode(i));
        }
    } else {
        for (let i = endingCode+1; i < startingCode; i++){
            newString.push(String.fromCharCode(i));
        }
    }




console.log(newString.join(" "))
    // String.fromCharCode();
}

solve('C',
'#')