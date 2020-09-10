function add(first, second, third) {
    let nan = false
    
    if (second < 0) {
        second = 0
    }
    if (third > first.length - 1) {
        third = first.length - 1
    }

    let array = first.slice(second, third + 1);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(first)) {
            return "NaN"
            nan = true
            break;
        }
        if (!array[i].isNaN) {
            return "NaN"
            nan = true
            break;
        }
        sum += array[i];
    }
    if (!nan) {
        return sum
    }
}
add([10, 'twenty', 30, 40], 0, 2)