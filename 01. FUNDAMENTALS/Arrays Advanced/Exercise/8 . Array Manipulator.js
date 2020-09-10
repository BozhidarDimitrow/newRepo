function solve(array1, array2) {

    
        
        
    for (let i = 0; i < array2.length; i++) {
        let conditions = array2[i].split(" ")
        let command = conditions.shift()
        
        let print = false;
        switch (command) {
            case "print":
                print = true;
                break;
            case "add":
                add(conditions[0], Number(conditions[1]));
                break;
            case "addMany":
                addMany(conditions[0], conditions)
                break;
            case "contains":
                contains(Number(conditions[0]))
                break;
            case "remove":
                remove(conditions[0]);
                break;
            case "shift":
                shift(conditions[0]);
                array1.shift()
                break;
            case "sumPairs":
                sumPairs();
                break;
        }

        if (print) {
            break;
        }
    }

    console.log(`[ ${array1.join(", ")} ]`);




    function contains(num) {
        let contain = false
        for (let i = 0; i < array1.length; i++) {
            if (Number(array1[i]) === num) {
                contain = true;
            }
        }
        if (contain) {
            console.log(0)
        } else {
            console.log(-1)
        }
    }
    function add(index, element) {
        return array1.splice(index, 0, element)
    }
    function addMany(index, condition) {
        for (let i = condition.length-1; i >= 1 ; i--) {
            array1.splice(index, 0, Number(condition[i]))
        }
        return array1
    }
    function remove(index) {
        return array1.splice(index, 1)
    }
    function shift(positions) {
        for (let i = positions; i < array1.length; i++) {
            array1.splice((i - positions), 0, array1[i])
            array1.splice((i+1), 1)
        }
        return array1
    }
    function sumPairs() {
        let newArray = [];
        for (let i = 0; i < array1.length; i += 2) {
            let sum = 0;
            sum = (Number(array1[i]) + Number(array1[i + 1]));
            if (Number.isNaN(sum)) {
                sum = Number(array1[i])
            }
            newArray.push(sum)
        }
        array1 = newArray
        return array1
    }
    

}
solve([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"])