function solve(array){

    let arrays = JSON.stringify(array);

    array.forEach(element => {
        let token = element
        token.sort((a,b) => a-b)
    });



    console.log(array)

}
solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])