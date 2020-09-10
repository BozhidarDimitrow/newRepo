function arguments() {
    stringCounter = 0;
    numCounter = 0;
    functionCounter = 0;
    objCounter = 0
    let countArray = []
    let argArray = []
    let arg = [...arguments]

    for (let i = 0; i < arg.length; i++) {
        if (typeof (arg[i]) === "string") {
            stringCounter++
            argArray.push(`string: ${arg[i]}`)
            // console.log(`string: ${arg[i]}`);
            let exist = false
            for (let j = 0; j < countArray.length; j += 2) {
                if (countArray[j] === "string") {
                    countArray.splice(j + 1, 1, stringCounter)
                    exist = true
                }
            }
            if (!exist) {
                countArray.push("string", stringCounter)
            }
        } else if (typeof (arg[i]) === "number") {
            numCounter++
            argArray.push(`number: ${arg[i]}`)
            // console.log(`number: ${arg[i]}`);
            let exist = false
            for (let j = 0; j < countArray.length; j += 2) {
                if (countArray[j] === "number") {
                    countArray.splice(j + 1, 1, numCounter)
                    exist = true
                }
            }
            if (!exist) {
                countArray.push("number", numCounter)
            }
        } else if (typeof (arg[i]) === "function") {
            functionCounter++
            argArray.push(`function: ${arg[i]}`)
            // console.log(`function: ${arg[i]}`);
            let exist = false
            for (let j = 0; j < countArray.length; j += 2) {
                if (countArray[j] === "function") {
                    countArray.splice(j + 1, 1, functionCounter)
                    exist = true
                }
            }
            if (!exist) {
                countArray.push("function", functionCounter)
            }
        } else if (typeof (arg[i]) === "object") {
            objCounter++
            argArray.push(`object: ${arg[i]}`)
            // console.log(`object: ${arg[i]}`);
            let exist = false
            for (let j = 0; j < countArray.length; j += 2) {
                if (countArray[j] === "object") {
                    countArray.splice(j + 1, 1, objCounter)
                    exist = true
                }
            }
            if (!exist) {
                countArray.push("object", objCounter)
            }
        }
    }

    for (let i = 0; i < countArray.length; i += 2) {
        argArray.push(`${countArray[i]} = ${countArray[i + 1]}`)
        // (`${countArray[i]} : ${countArray[i + 1]}`);
    }
     argArray.forEach(element => console.log(element))
    // console.log(argArray);

}

arguments({name: "bob"}, 3.333, 9.999)
