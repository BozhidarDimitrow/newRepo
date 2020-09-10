function solve(array) {
    let maxSeats = Number(array[1])

    let train = array.shift()
        .split(" ")
        .map(Number);


    for (let i = 1; i < array.length; i++) {
        let [command, firstNum,]
            = array[i].split(` `)
        firstNum = Number(firstNum);
        if (command === "Add") {
            add(firstNum);
        } else {
            let j = 0
            while (j < train.length) {
                if (Number(array[i]) <= (maxSeats - Number(train[j]))) {
                    insert((Number(array[i]) + Number(train[j])), j);
                    removeAt(j + 1);
                    break;
                }
                j++

            }

        }

    }


    function add(el) {
        train.push(el);
    }
    function removeAt(index) {
        train.splice(index, 1);
    }
    function insert(num, index) {
        train.splice(index, 0, num);
    }

    console.log(train.join(" "))
}
solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])