function password(array) {

    let valid = true
    let wronginput = false;
    if (array.length < 6 || array.length > 9) {
        console.log("Password must be between 6 and 10 characters")
        valid = false
    }
    let sumNan = 0;
    for (let i = 0; i < array.length; i++) {
        let code = array[i].charCodeAt(0);
        if (code >= 48 && code <= 57) {
            sumNan += 1;
        } else if (code >= 65 && code <= 90) {
        } else if (code >= 97 && code <= 122) {
        } else {
            wronginput = true;
            valid = false;
        }

    }
    if (wronginput) {
        console.log(`Password must consist only of letters and digits`)
    }
    if (sumNan < 2) {
        console.log(`Password must have at least 2 digits`)
        valid = false
    }
    if (valid) {
        console.log("Password is valid")
    }

}
password('Pa$s$s')