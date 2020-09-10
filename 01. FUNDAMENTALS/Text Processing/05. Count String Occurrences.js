function solve(text, word) {
    let count = 0
    let index = text.indexOf(` ${word} `)


    while (index > -1) {
        index = text.indexOf(` ${word} `, index + 1)
        count++
    }

    if (text.startsWith(`${word} `)) {
        count++
    }
    if (text.endsWith(` ${word}`)) {
        count++
    }

    console.log(count)

}
solve("is This is a word and it also is a sentenceis",
    "is")