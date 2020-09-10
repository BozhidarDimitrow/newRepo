function solve(input) {
    let n = Number(input[0]);
    let existingList = input.slice(1, n + 1)
    let pieceArray = []

    existingList.forEach(element => {
        let token = element.split("|");
        let piece = token[0];
        let composer = token[1];
        let key = token[2];
        let currentObj = { piece, composer, key }
        pieceArray.push(currentObj)
    });

    for (let i = n + 1; i < input.length; i++) {
        let exist = false;
        let token = input[i].split("|");
        let command = token[0];
        if (command === "Stop") {
            break;
        }
        if (command === "Add") {
            let newPiece = token[1];
            let newComposer = token[2];
            let newKey = token[3];
            pieceArray.forEach(element => {
                if (element.piece === newPiece) {
                    exist = true;
                    console.log(`${newPiece} is already in the collection!`);
                }
            })
            if (!exist) {
                let newObj = { piece: newPiece, composer: newComposer, key: newKey };
                pieceArray.push(newObj)
                console.log(`${newPiece} by ${newComposer} in ${newKey} added to the collection!`);
            }
        } else if (command === "Remove") {
            let newPiece = token[1];
            for (let j = 0; j < pieceArray.length; j++) {
                if (pieceArray[j].piece === newPiece) {
                    exist = true;
                    pieceArray.splice(j, 1);
                    j--
                    console.log(`Successfully removed ${newPiece}!`);
                }
            }
            if (!exist) {
                console.log(`Invalid operation! ${newPiece} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {
            let newPiece = token[1];
            let newKey = token[2];
            pieceArray.forEach(element => {
                if (element.piece === newPiece) {
                    exist = true;
                    element.key = newKey
                    console.log(`Changed the key of ${newPiece} to ${newKey}!`);
                }
            })
            if (!exist) {
                console.log(`Invalid operation! ${newPiece} does not exist in the collection.`);
            }
        }
    }


    function compare(a, b) {
        if (a.piece < b.piece) {
            return -1;
        }
        if (a.piece > b.piece) {
            return 1;
        }
        if (a.piece = b.piece) {
            if (a.composer < b.composer) {
                return -1;
            }
            if (a.composer > b.composer) {
                return 1;
            }
            return 0;
        }
    }

    pieceArray.sort(compare)

    pieceArray.forEach(element => {
        console.log(`${element.piece} -> Composer: ${element.composer}, Key: ${element.key}`);
    })

}
solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
)