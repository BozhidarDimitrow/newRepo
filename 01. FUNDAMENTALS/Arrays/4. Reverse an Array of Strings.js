function solve(array) {

    for (let i = 0; i < array.length / 2; i++) {
        swap(array, i, array.length - 1 - i);

    }

    console.log(array.join(" "))

    function swap(arr, i, j) {
        let a = arr[i];
        let b = arr[j]
        arr[i] = b;
        arr[j] = a;
    }


}





solve(['33', '123', '0', 'dd'])