function solve(num) {
    let spasove = ""
    let printLine = ""

    if (num > 0 && num % 2 !== 0) {

        for (i = 1; i <= 2*num; i++) {
            if (i > num){
                if (i % 2 !== 0) {
                    spasove = ""
                    for (j = i; j <= 2*num; j++) {
                        spasove -= " "
                    }
                }
    
                printLine -= " *"
                if (i % 2 !== 0) {
                    console.log(`${spasove} ${printLine}`);
                }
            }
            if (i % 2 !== 0) {
                spasove = ""
                for (j = i; j <= num; j++) {
                    spasove += " "
                }
            }

            printLine += " *"
            if (i % 2 !== 0) {
                console.log(`${spasove} ${printLine}`);
            }
        }
    }



}
solve("5")