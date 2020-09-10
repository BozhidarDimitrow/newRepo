function source(array) {

    let username = array[0];
    let password = array[1];

    let data = array[2];
    let index = 3;

    while (data !== password) {
        data = array[index];
        index++
    }
    console.log(`Welcome ${username}!`)



}


source(["Gosho",
"secret",
"secret"])