function solve (array) {

   
    let i = 1;
    broiProvereni = 0;

    while(i < array.length) {
        broiProvereni ++;
        if (array[i] === array[0]) {
            console.log(`You checked ${broiProvereni - 1} books and found it.`)
            break;
        }
        
        
        if (array[i] === "No More Books") {
            console.log(`The book you search is not here!`)
            console.log(`You checked ${broiProvereni - 1} books.`)
        }
        i++
    }
}

solve (["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])