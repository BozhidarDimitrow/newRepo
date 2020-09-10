function solve(array,cond){

    if(cond === "asc"){
       return array.sort((a,b) => a-b)
    } else {
        return array.sort((a,b) => b-a)
    }


}
solve([14, 7, 17, 6, 8], 'desc')