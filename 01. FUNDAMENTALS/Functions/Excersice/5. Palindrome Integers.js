function palindrome(array) {

    for (let i = 0; i < array.length; i++) {
        let newArray = String(array[i]);
        let palindrome = false
        for (let j = 0; j < newArray.length - j; j++) {
            let newNum = Number(newArray[j])
            let newNum2 = Number(newArray[newArray.length - 1 - j])
            if (newNum === newNum2) {
                palindrome = true
            } else {
                palindrome = false;
                break;
            }

        }
        if (palindrome) {
            console.log("true")
        } else {
            console.log("false")
        }


    }

}

palindrome([32,2,232,1010])