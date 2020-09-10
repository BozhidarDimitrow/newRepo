function number(num) {
    
   let sum = 0;
   
    for (let index = 0; index < num.length; index++) {
        let currenNumber = Number(num[index]);
        sum += currenNumber;
    }

    console.log(`The sum of the digits is:${sum}`)
}

number("564891")