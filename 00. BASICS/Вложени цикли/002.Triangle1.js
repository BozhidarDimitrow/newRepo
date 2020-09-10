function solve(num) {


    let current = 1;
    let spasove = ""

    let printLine = ""

   

        for (i = 1; i <= num; i++) {
           spasove = ""
            for (j = i; j <= num; j++){
                spasove += " "
            }

            printLine += "*"
            current++
            console.log(`${spasove} ${printLine}`);
        }

    



}

solve(["5"])

