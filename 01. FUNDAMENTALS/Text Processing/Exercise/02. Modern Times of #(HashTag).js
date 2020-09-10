function solve(text) {

    let array = text.split(" ")

    for(let i = 0; i < array.length; i++){
        let checkedWord = array[i]
        var letters = /^[A-Za-z]+$/;
        let rest = checkedWord.substring(1)
        if(checkedWord[0]==="#" && rest.match(letters)){
            console.log(rest)
           
        }
    }

   
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')