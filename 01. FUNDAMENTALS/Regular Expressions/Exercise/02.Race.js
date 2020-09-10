function solve(text) {

    let namePattern = /[A-Za-z]/g;
    let numPattern = /[0-9]/g;

    let names = text[0]





    let race = text.slice(1)

    let raceObj = {}
    let name
    let scores = []
    for (elements of race) {
        elements.trim()
        let name = ""
        let score = 0
        for (let i = 0; i < elements.length; i++) {
            let token = elements[i]
            if (token.match(namePattern)) {
                name += elements[i];
            } else if (token.match(numPattern)) {
                score += Number(token);
            }
        }
        if (names.includes(name)) {
            scores.push(name, score)
        }

    }

    for (let i = 0; i < scores.length; i += 2) {
        let name = scores[i];
        for (let j = i + 2; j < scores.length; j += 2) {
            let checked = scores[j];
            if (name === checked) {
                scores[i + 1] += scores[j + 1];
                scores.splice(j, 2);
            }
        }
    }
    for (var i = 0; i < scores.length; i += 2) {
        raceObj[scores[i]] = scores[i + 1];
    }

    let keysSorted = Object.keys(raceObj).sort(function (a, b) { return raceObj[b] - raceObj[a] })


    if (keysSorted[0] !== "undefined") {
        console.log(`1st place: ${keysSorted[0]}`);
    }
    if (keysSorted[1] !== "undefined") {
        console.log(`2nd place: ${keysSorted[1]}`);
    }
    if (keysSorted[2] !== "undefined") {
        console.log(`3rd place: ${keysSorted[2]}`);
    }

}

solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])