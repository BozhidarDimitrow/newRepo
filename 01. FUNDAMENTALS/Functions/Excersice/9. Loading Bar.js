function loadingBar(num) {

    function stilLoading(a) {
        let newArray = []
        newArray.push("[")
        let procent = 0
        for (let i = 0; i < 100; i += 10) {
            if (i < a) {
                newArray.push("%");
                procent += 10;
            } else {
                newArray.push(".");
            }
        }
        newArray.push("]")
        console.log(`${procent}% ${newArray.join("")}`)
        console.log(`Still loading...`)
    }
    
    if (num === 100) {
        console.log(`100% Complete!`)
        console.log(`[%%%%%%%%%%]`)
    } else {
        stilLoading(num)
    }


}

loadingBar(50)